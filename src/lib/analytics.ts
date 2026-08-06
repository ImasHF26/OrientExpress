'use client'

export function trackCta(ctaId: string, label: string, section: string = 'Global') {
  try {
    if (typeof window !== 'undefined') {
      const payload = {
        ctaId,
        label,
        section,
        page: window.location.pathname,
      }

      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' })
        navigator.sendBeacon('/api/analytics/cta', blob)
      } else {
        fetch('/api/analytics/cta', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {})
      }
    }
  } catch (e) {
    console.warn('Analytics CTA tracking bypass:', e)
  }
}
