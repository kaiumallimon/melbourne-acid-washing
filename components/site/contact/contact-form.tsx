"use client"

import { FormEvent, useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { SERVICE_OPTIONS } from "@/lib/site-data"

type ContactFormValues = {
  firstName: string
  lastName: string
  phone: string
  email: string
  service: string
  suburb: string
  message: string
}

const initialValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  service: "",
  suburb: "",
  message: "",
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const canSubmit = useMemo(() => {
    return (
      values.firstName.trim() !== "" &&
      values.lastName.trim() !== "" &&
      values.phone.trim() !== "" &&
      values.email.trim() !== "" &&
      values.service.trim() !== "" &&
      values.suburb.trim() !== "" &&
      values.message.trim() !== ""
    )
  }, [values])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!canSubmit || isSubmitting) {
      return
    }

    setIsSubmitting(true)
    setErrorMessage("")
    setSuccessMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string }
        setErrorMessage(payload.error ?? "We could not send your quote request. Please try again.")
        return
      }

      setSuccessMessage("Thank you. We will be in touch within 2 hours with your free quote.")
      setValues(initialValues)
    } catch {
      setErrorMessage("We could not send your quote request right now. Please call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_18px_36px_-30px_rgba(9,63,103,0.9)] md:p-6">
      <div>
        <p className="font-heading text-2xl font-bold text-[--brand-ink]">Request a Free Quote</p>
        <p className="mt-1 text-sm text-slate-600">Fill in your details and our team will respond quickly.</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Field>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={values.firstName}
            onChange={(event) => setValues((current) => ({ ...current, firstName: event.target.value }))}
            placeholder="John"
            required
            className="h-10"
          />
        </Field>
        <Field>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={values.lastName}
            onChange={(event) => setValues((current) => ({ ...current, lastName: event.target.value }))}
            placeholder="Smith"
            required
            className="h-10"
          />
        </Field>
      </div>

      <Field>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={values.phone}
          onChange={(event) => setValues((current) => ({ ...current, phone: event.target.value }))}
          placeholder="+61 4XX XXX XXX"
          required
          className="h-10"
        />
      </Field>

      <Field>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={values.email}
          onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
          placeholder="your@email.com"
          required
          className="h-10"
        />
      </Field>

      <Field>
        <Label htmlFor="service">Service Required</Label>
        <Select
          value={values.service}
          onValueChange={(value) => setValues((current) => ({ ...current, service: value }))}
        >
          <SelectTrigger id="service" className="h-10 w-full">
            <SelectValue placeholder="Select a service..." />
          </SelectTrigger>
          <SelectContent>
            {SERVICE_OPTIONS.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field>
        <Label htmlFor="suburb">Suburb</Label>
        <Input
          id="suburb"
          value={values.suburb}
          onChange={(event) => setValues((current) => ({ ...current, suburb: event.target.value }))}
          placeholder="e.g. Toorak, Hawthorn"
          required
          className="h-10"
        />
      </Field>

      <Field>
        <Label htmlFor="message">Message / Details</Label>
        <Textarea
          id="message"
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          placeholder="Describe your job, approximate size, and any specific concerns."
          required
          className="min-h-28"
        />
      </Field>

      <Button
        type="submit"
        size="lg"
        disabled={!canSubmit || isSubmitting}
        className="w-full rounded-xl border-0 bg-[--brand-navy] text-white hover:bg-[--brand-blue]"
      >
        {isSubmitting ? "Sending Quote Request..." : "Send My Quote Request"}
      </Button>

      {successMessage ? (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
          {successMessage}
        </p>
      ) : null}

      {errorMessage ? (
        <p className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{errorMessage}</p>
      ) : null}
    </form>
  )
}

function Field({ children }: { children: React.ReactNode }) {
  return <div className="space-y-1.5">{children}</div>
}

function Label({ children, htmlFor }: { children: string; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
      {children}
    </label>
  )
}
