import { useEffect } from 'react'

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Count a number up from zero once it scrolls into view. */
function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count)
  if (!Number.isFinite(target)) return
  const pad = el.dataset.countPad ? Number(el.dataset.countPad) : 0
  const format = (n: number) => String(Math.round(n)).padStart(pad, '0')
  if (reduceMotion()) {
    el.textContent = format(target)
    return
  }
  const duration = 1400
  const start = performance.now()
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - t, 4)
    el.textContent = format(target * eased)
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

/** Gentle 3D tilt that follows the pointer, with a light sheen. */
function bindTilt(el: HTMLElement) {
  let frame = 0
  const move = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return
    cancelAnimationFrame(frame)
    frame = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width
      const y = (e.clientY - r.top) / r.height
      el.style.setProperty('--rx', `${(0.5 - y) * 10}deg`)
      el.style.setProperty('--ry', `${(x - 0.5) * 12}deg`)
      el.style.setProperty('--mx', `${x * 100}%`)
      el.style.setProperty('--my', `${y * 100}%`)
    })
  }
  const leave = () => {
    cancelAnimationFrame(frame)
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }
  el.addEventListener('pointermove', move)
  el.addEventListener('pointerleave', leave)
  return () => {
    el.removeEventListener('pointermove', move)
    el.removeEventListener('pointerleave', leave)
  }
}

/**
 * Scroll reveals ([data-reveal]), count-ups ([data-count]) and tilt cards ([data-tilt])
 * for the current page. Re-run whenever the route changes.
 */
export function usePageMotion(routeKey: string) {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'))
    const cleanups: (() => void)[] = []

    if (reduceMotion() || !('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('is-in'))
      counters.forEach(countUp)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          if (el.dataset.count !== undefined) countUp(el)
          else el.classList.add('is-in')
          io.unobserve(el)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    reveals.forEach((el) => io.observe(el))
    counters.forEach((el) => io.observe(el))

    if (window.matchMedia('(hover: hover)').matches) {
      document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => cleanups.push(bindTilt(el)))
    }

    return () => {
      io.disconnect()
      cleanups.forEach((fn) => fn())
    }
  }, [routeKey])
}

/** True once the page has scrolled past the top, for the header's glass state. */
export function useScrolled(threshold = 8) {
  useEffect(() => {
    const root = document.documentElement
    const update = () => root.classList.toggle('is-scrolled', window.scrollY > threshold)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [threshold])
}
