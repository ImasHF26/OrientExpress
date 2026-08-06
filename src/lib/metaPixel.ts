'use client'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    _fbq?: unknown
  }
}

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || ''

export const initMetaPixel = () => {
  if (typeof window === 'undefined' || !META_PIXEL_ID) return

  // Verify cookie consent before initializing if required
  const consent = localStorage.getItem('capfuture_cookie_consent')
  if (consent === 'declined') return

  if (window.fbq) return

  const n = (window.fbq = function (...args: unknown[]) {
    if (n.callMethod) {
      n.callMethod(...args)
    } else {
      n.queue.push(args)
    }
  }) as unknown as {
    (...args: unknown[]): void
    callMethod?: (...args: unknown[]) => void
    queue: unknown[]
    push: unknown
    loaded: boolean
    version: string
  }

  if (!window._fbq) window._fbq = n
  n.push = n
  n.loaded = true
  n.version = '2.0'
  n.queue = []

  const t = document.createElement('script')
  t.async = true
  t.src = 'https://connect.facebook.net/en_US/fbevents.js'
  const s = document.getElementsByTagName('script')[0]
  if (s && s.parentNode) {
    s.parentNode.insertBefore(t, s)
  }

  window.fbq('init', META_PIXEL_ID)
  window.fbq('track', 'PageView')
}

export const trackMetaLead = (customData: Record<string, unknown> = {}) => {
  if (typeof window === 'undefined') return
  if (window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Consultation Orientation Bac/Master',
      currency: 'MAD',
      value: 0,
      ...customData,
    })
  } else {
    console.log('[Meta Pixel Simulation] Event tracked: Lead', customData)
  }
}

export const trackMetaEvent = (eventName: string, data: Record<string, unknown> = {}) => {
  if (typeof window === 'undefined') return
  if (window.fbq) {
    window.fbq('trackCustom', eventName, data)
  } else {
    console.log(`[Meta Pixel Simulation] Event tracked: ${eventName}`, data)
  }
}
