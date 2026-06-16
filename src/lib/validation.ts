export type ValidationError = {
  field: string
  message: string
}

export function validateContactForm(data: {
  name?: string
  email?: string
  message?: string
}): ValidationError[] {
  const errors: ValidationError[] = []

  if (!data.name || data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' })
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push({ field: 'email', message: 'Invalid email address' })
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' })
  }

  return errors
}
