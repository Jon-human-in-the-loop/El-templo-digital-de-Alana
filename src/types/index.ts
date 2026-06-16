export type NavLink = {
  label: string
  href: string
  children?: NavLink[]
}

export type ContactFormData = {
  name: string
  email: string
  message: string
}

export type EmailSubscription = {
  email: string
  subscribedAt?: Date
}
