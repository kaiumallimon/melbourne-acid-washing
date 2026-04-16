export type ContactSubmission = {
  firstName: string
  lastName: string
  phone: string
  email: string
  service: string
  suburb: string
  message: string
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

export function buildAdminEmailHtml(data: ContactSubmission) {
  const fullName = `${data.firstName} ${data.lastName}`

  return `
  <div style="font-family: Arial, Helvetica, sans-serif; background: #f6fbff; padding: 24px; color: #10314d;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 680px; margin: 0 auto; background: #ffffff; border: 1px solid #dcecf8; border-radius: 14px; overflow: hidden;">
      <tr>
        <td style="background: linear-gradient(120deg, #0b3f67, #1f6fa8); padding: 20px 24px; color: #ffffff;">
          <h1 style="margin: 0; font-size: 22px;">New Quote Request</h1>
          <p style="margin: 6px 0 0; font-size: 13px; opacity: 0.9;">Melbourne Acid Washing website enquiry</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 20px 24px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size: 14px; line-height: 1.6;">
            <tr>
              <td style="padding: 8px 0; color: #5b6f81; width: 160px;">Name</td>
              <td style="padding: 8px 0; font-weight: 700;">${escapeHtml(fullName)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #5b6f81;">Phone</td>
              <td style="padding: 8px 0;">${escapeHtml(data.phone)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #5b6f81;">Email</td>
              <td style="padding: 8px 0;">${escapeHtml(data.email)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #5b6f81;">Service</td>
              <td style="padding: 8px 0;">${escapeHtml(data.service)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #5b6f81;">Suburb</td>
              <td style="padding: 8px 0;">${escapeHtml(data.suburb)}</td>
            </tr>
          </table>

          <div style="margin-top: 18px; border: 1px solid #dbe9f5; background: #f7fbff; border-radius: 10px; padding: 14px;">
            <p style="margin: 0 0 6px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #4f6780; font-weight: 700;">Message Details</p>
            <p style="margin: 0; white-space: pre-wrap; color: #102f4a;">${escapeHtml(data.message)}</p>
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding: 14px 24px; border-top: 1px solid #dcecf8; font-size: 12px; color: #6b8093;">
          This email was sent automatically from the Melbourne Acid Washing website contact form.
        </td>
      </tr>
    </table>
  </div>
  `
}

export function buildCustomerEmailHtml(data: ContactSubmission) {
  return `
  <div style="font-family: Arial, Helvetica, sans-serif; background: #f6fbff; padding: 24px; color: #10314d;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 680px; margin: 0 auto; background: #ffffff; border: 1px solid #dcecf8; border-radius: 14px; overflow: hidden;">
      <tr>
        <td style="background: linear-gradient(120deg, #0b3f67, #1f6fa8); padding: 20px 24px; color: #ffffff;">
          <h1 style="margin: 0; font-size: 22px;">Thanks for contacting Melbourne Acid Washing</h1>
          <p style="margin: 6px 0 0; font-size: 13px; opacity: 0.9;">We have received your quote request</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 20px 24px; font-size: 14px; line-height: 1.7; color: #203f5b;">
          <p style="margin-top: 0;">Hi ${escapeHtml(data.firstName)},</p>
          <p>
            Thank you for reaching out. Your request has been logged and our team will review your details and get
            back to you as soon as possible, usually within 2 hours during business times.
          </p>
          <div style="margin: 16px 0; border: 1px solid #dbe9f5; background: #f7fbff; border-radius: 10px; padding: 14px;">
            <p style="margin: 0 0 6px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #4f6780; font-weight: 700;">Request Summary</p>
            <p style="margin: 0;">Service: ${escapeHtml(data.service)}</p>
            <p style="margin: 0;">Suburb: ${escapeHtml(data.suburb)}</p>
          </div>
          <p style="margin-bottom: 0;">
            If your job is urgent, you can reply to this email or call us directly on +61 401 561 317.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding: 14px 24px; border-top: 1px solid #dcecf8; font-size: 12px; color: #6b8093;">
          Melbourne Acid Washing | Professional exterior cleaning across Melbourne.
        </td>
      </tr>
    </table>
  </div>
  `
}

export function buildAdminEmailText(data: ContactSubmission) {
  return [
    "New quote request from Melbourne Acid Washing website",
    `Name: ${data.firstName} ${data.lastName}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Service: ${data.service}`,
    `Suburb: ${data.suburb}`,
    "Message:",
    data.message,
  ].join("\n")
}

export function buildCustomerEmailText(data: ContactSubmission) {
  return [
    `Hi ${data.firstName},`,
    "",
    "Thank you for contacting Melbourne Acid Washing.",
    "We received your quote request and will reply as soon as possible.",
    "",
    `Service: ${data.service}`,
    `Suburb: ${data.suburb}`,
    "",
    "If urgent, call +61 401 561 317.",
  ].join("\n")
}
