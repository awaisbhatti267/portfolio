import { useEffect } from 'react'

const useScrollAnimation = () => {
  useEffect(() => {

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            intersectionObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    // Observe any element with data-animate
    const observe = (el) => {
      if (el.hasAttribute('data-animate') && !el.classList.contains('animate-in')) {
        intersectionObserver.observe(el)
      }
    }

    // Observe all existing elements on mount
    document.querySelectorAll('[data-animate]').forEach(observe)

    // Watch for new elements added to DOM (lazy loaded components)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return  // skip non-elements

          // Check the node itself
          if (node.hasAttribute && node.hasAttribute('data-animate')) {
            observe(node)
          }

          // Check all children inside the added node
          if (node.querySelectorAll) {
            node.querySelectorAll('[data-animate]').forEach(observe)
          }
        })
      })
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      intersectionObserver.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}

export default useScrollAnimation
