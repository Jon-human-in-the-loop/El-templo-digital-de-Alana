'use client'

import { AnimatePresence } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'

import InstagramPopup from './InstagramPopup'
import NewsletterPopup from './NewsletterPopup'

type Popup = 'none' | 'newsletter' | 'instagram'

const STORAGE_KEYS: Record<Exclude<Popup, 'none'>, string> = {
  newsletter: 'alana.popup.newsletter',
  instagram: 'alana.popup.instagram',
}

const NEWSLETTER_DELAY_MS = 12_000
const INSTAGRAM_DELAY_MS = 25_000

function isDismissed(popup: Exclude<Popup, 'none'>): boolean {
  if (typeof window === 'undefined') return true
  try {
    return window.localStorage.getItem(STORAGE_KEYS[popup]) === 'dismissed'
  } catch {
    // Private mode or storage disabled: show the popup, just don't remember it.
    return false
  }
}

function dismiss(popup: Exclude<Popup, 'none'>) {
  try {
    window.localStorage.setItem(STORAGE_KEYS[popup], 'dismissed')
  } catch {
    /* nothing to persist */
  }
}

/**
 * Shows the newsletter popup first and the Instagram one later, never both at
 * once. Each is remembered as dismissed so it does not come back on every visit.
 */
export default function SitePopups() {
  const [active, setActive] = useState<Popup>('none')

  const scheduleInstagram = useCallback((delay: number) => {
    if (isDismissed('instagram')) return undefined
    const timer = window.setTimeout(() => {
      setActive((current) => (current === 'none' ? 'instagram' : current))
    }, delay)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isDismissed('newsletter')) {
      const timer = window.setTimeout(() => {
        setActive((current) => (current === 'none' ? 'newsletter' : current))
      }, NEWSLETTER_DELAY_MS)
      return () => window.clearTimeout(timer)
    }
    return scheduleInstagram(INSTAGRAM_DELAY_MS)
  }, [scheduleInstagram])

  const closeNewsletter = () => {
    dismiss('newsletter')
    setActive('none')
    scheduleInstagram(INSTAGRAM_DELAY_MS)
  }

  const closeInstagram = () => {
    dismiss('instagram')
    setActive('none')
  }

  return (
    <AnimatePresence>
      {active === 'newsletter' && <NewsletterPopup key="newsletter" onClose={closeNewsletter} />}
      {active === 'instagram' && <InstagramPopup key="instagram" onClose={closeInstagram} />}
    </AnimatePresence>
  )
}
