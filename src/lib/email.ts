import { Resend } from 'resend'

let _resend: Resend | null = null

function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY)
  }
  return _resend
}

const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev'
const TO_EMAIL = process.env.TO_EMAIL || 'zarzairaetaalana@gmail.com'

export async function sendContactEmail(data: {
  name: string
  email: string
  message: string
}) {
  const { error } = await getResend().emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    replyTo: data.email,
    subject: `[Alana] Nuevo contacto de ${data.name}`,
    html: `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #000; background-color: #fff;">
        <h1 style="font-size: 24px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px;">Nuevo mensaje de contacto</h1>
        <div style="border-top: 1px solid #000; padding-top: 16px;">
          <p><strong>De:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
        </div>
        <div style="margin-top: 32px; padding: 24px; background-color: #f9f9f9; border: 1px solid #eee;">
          <p style="white-space: pre-wrap; margin: 0;">${data.message}</p>
        </div>
        <div style="margin-top: 40px; font-size: 11px; text-transform: uppercase; color: #999;">
          Enviado desde el formulario de contacto de Alana Zarzairaeta
        </div>
      </div>
    `,
  })

  if (error) {
    console.error('Failed to send contact email:', error)
    throw new Error('Failed to send email')
  }

  return { success: true }
}
