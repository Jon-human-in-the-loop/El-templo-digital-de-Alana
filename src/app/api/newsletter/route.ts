import { NextResponse } from 'next/server'

import { sendNewsletterSubscriptionEmail } from '@/lib/email'
import { validateNewsletterForm } from '@/lib/validation'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const errors = validateNewsletterForm(body)
    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 })
    }

    await sendNewsletterSubscriptionEmail({ email: body.email.trim() })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter API error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}
