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

export async function sendOrderConfirmationEmail(data: {
  orderId: string
  customerName: string
  customerEmail: string
  items: Array<{ name: string; quantity: number; price: number }>
  total: number
  shippingAddress: {
    address: string
    city: string
    postalCode: string
  }
}) {
  const formatPrice = (cents: number) =>
    new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(cents / 100)

  const itemsHtml = data.items
    .map(
      (item) => `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${item.name}</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #eee; text-align: right;">${formatPrice(item.price * item.quantity)}</td>
      </tr>
    `
    )
    .join('')

  // Email to customer
  const { error: customerError } = await getResend().emails.send({
    from: FROM_EMAIL,
    to: [data.customerEmail],
    subject: `Confirmación de Pedido - Alana Zarzairaeta #${data.orderId}`,
    html: `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #000;">
        <h1 style="font-size: 28px; text-transform: uppercase; letter-spacing: 0.2em; text-align: center; margin-bottom: 8px;">ALANA</h1>
        <p style="text-align: center; font-style: italic; color: #666; font-size: 14px; margin-bottom: 40px;">Universo Creativo & Arte</p>
        
        <h2 style="font-size: 18px; text-transform: uppercase; border-bottom: 2px solid #000; padding-bottom: 10px; margin-top: 40px;">Confirmación de Pedido</h2>
        <p>Hola <strong>${data.customerName}</strong>, gracias por conectar con mi obra. He recibido tu pedido.</p>
        <p style="color: #666;">ID de Pedido: <strong>#${data.orderId}</strong></p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 30px;">
          <thead>
            <tr style="border-bottom: 1px solid #000;">
              <th style="padding: 12px 0; text-align: left; text-transform: uppercase; font-size: 12px;">Obra</th>
              <th style="padding: 12px 0; text-align: center; text-transform: uppercase; font-size: 12px;">Cant</th>
              <th style="padding: 12px 0; text-align: right; text-transform: uppercase; font-size: 12px;">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" style="padding: 24px 0; font-weight: bold; text-transform: uppercase;">Total</td>
              <td style="padding: 24px 0; font-weight: bold; text-align: right; font-size: 20px;">${formatPrice(data.total)}</td>
            </tr>
          </tfoot>
        </table>
        
        <div style="margin-top: 40px; padding: 20px; background-color: #f9f9f9; border: 1px solid #eee;">
          <h3 style="font-size: 14px; text-transform: uppercase; margin-top: 0;">Dirección de Envío</h3>
          <p style="margin-bottom: 0;">
            ${data.shippingAddress.address}<br />
            ${data.shippingAddress.city}, ${data.shippingAddress.postalCode}
          </p>
        </div>
        
        <p style="color: #999; font-size: 11px; text-align: center; margin-top: 60px;">ALANA ZARZAIRAETA | zarzairaetaalana@gmail.com</p>
      </div>
    `,
  })

  if (customerError) {
    console.error('Failed to send customer email:', customerError)
  }

  // Email to store owner (Alana)
  const { error: ownerError } = await getResend().emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    subject: `[Tienda] ¡Nuevo Pedido de Arte! #${data.orderId} - ${data.customerName}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px;">🎨 ¡Tienes una nueva venta!</h1>
        <p><strong>Pedido:</strong> #${data.orderId}</p>
        <p><strong>Cliente:</strong> ${data.customerName} (${data.customerEmail})</p>
        <p><strong>Total:</strong> ${formatPrice(data.total)}</p>
        
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        
        <h3>Obras vendidas:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tbody>${itemsHtml}</tbody>
        </table>
        
        <h3>Dirección de Envío:</h3>
        <p>${data.shippingAddress.address}<br/>${data.shippingAddress.city}, ${data.shippingAddress.postalCode}</p>
      </div>
    `,
  })

  if (ownerError) {
    console.error('Failed to send owner notification:', ownerError)
  }

  return { success: true }
}
