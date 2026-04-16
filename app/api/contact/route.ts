import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

import {
  buildAdminEmailHtml,
  buildAdminEmailText,
  buildCustomerEmailHtml,
  buildCustomerEmailText,
  type ContactSubmission,
} from "@/lib/contact-email"
import { CONTACT_EMAIL, SERVICE_OPTIONS } from "@/lib/site-data"

type IncomingPayload = Partial<ContactSubmission>

const SERVICE_SET = new Set<string>(SERVICE_OPTIONS)

function normalizeString(value: unknown) {
  if (typeof value !== "string") {
    return ""
  }

  return value.trim()
}

function normalizePayload(payload: IncomingPayload): ContactSubmission {
  return {
    firstName: normalizeString(payload.firstName),
    lastName: normalizeString(payload.lastName),
    phone: normalizeString(payload.phone),
    email: normalizeString(payload.email).toLowerCase(),
    service: normalizeString(payload.service),
    suburb: normalizeString(payload.suburb),
    message: normalizeString(payload.message),
  }
}

function validatePayload(payload: ContactSubmission) {
  const errors: string[] = []

  if (payload.firstName.length < 2) errors.push("Please provide a valid first name.")
  if (payload.lastName.length < 2) errors.push("Please provide a valid last name.")
  if (payload.phone.length < 6) errors.push("Please provide a valid phone number.")

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(payload.email)) errors.push("Please provide a valid email address.")

  if (!SERVICE_SET.has(payload.service)) {
    errors.push("Please select a valid service option.")
  }

  if (payload.suburb.length < 2) errors.push("Please provide a suburb.")
  if (payload.message.length < 10) errors.push("Please include more details in your message.")

  return errors
}

export async function POST(request: Request) {
  let body: IncomingPayload

  try {
    body = (await request.json()) as IncomingPayload
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 })
  }

  const payload = normalizePayload(body)
  const validationErrors = validatePayload(payload)

  if (validationErrors.length > 0) {
    return NextResponse.json({ error: validationErrors[0] }, { status: 400 })
  }

  const smtpHost = process.env.SMTP_HOST
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const smtpPort = Number(process.env.SMTP_PORT ?? "587")
  const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465

  if (!smtpHost || !smtpUser || !smtpPass || Number.isNaN(smtpPort)) {
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 }
    )
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  const toEmail = process.env.CONTACT_TO_EMAIL ?? CONTACT_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? `Melbourne Acid Washing <${smtpUser}>`

  try {
    await transporter.sendMail({
      to: toEmail,
      from: fromEmail,
      replyTo: payload.email,
      subject: `New quote request: ${payload.firstName} ${payload.lastName}`,
      html: buildAdminEmailHtml(payload),
      text: buildAdminEmailText(payload),
    })

    await transporter.sendMail({
      to: payload.email,
      from: fromEmail,
      replyTo: toEmail,
      subject: "We received your quote request | Melbourne Acid Washing",
      html: buildCustomerEmailHtml(payload),
      text: buildCustomerEmailText(payload),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact email send failed:", error)

    return NextResponse.json(
      { error: "Could not send your quote request at this time." },
      { status: 500 }
    )
  }
}
