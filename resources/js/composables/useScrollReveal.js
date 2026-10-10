// A tiny, dependency-free scroll-reveal directive.
// Usage in templates: <div v-reveal> ... </div>  or  <div v-reveal="{ delay: 120 }">
// Respects prefers-reduced-motion by skipping the animation entirely.

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let sharedObserver

function getObserver() {
  if (sharedObserver) return sharedObserver

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target
          const delay = Number(el.dataset.revealDelay || 0)
          window.setTimeout(() => {
            el.classList.add('is-visible')
          }, delay)
          sharedObserver.unobserve(el)
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  )

  return sharedObserver
}

export const vReveal = {
  mounted(el, binding) {
    if (prefersReducedMotion()) {
      el.classList.add('is-visible')
      return
    }

    el.setAttribute('data-reveal', '')
    if (binding?.value?.delay) {
      el.dataset.revealDelay = String(binding.value.delay)
    }

    getObserver().observe(el)
  },
  unmounted(el) {
    sharedObserver?.unobserve(el)
  },
}
