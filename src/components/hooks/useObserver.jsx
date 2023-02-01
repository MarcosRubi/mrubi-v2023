import { useEffect, useState } from 'react'

export function useObserver (elementRef) {
  const [show, setShow] = useState('')

  useEffect(() => {
    const callbackFunction = (entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setShow('show')
      }
    }
    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(callbackFunction, {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    })

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect()
      }
    }
  }, [elementRef])

  return { show }
}
