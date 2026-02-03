import React, { useEffect } from 'react'
import Home from '@/pages/Home'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      // Clean up if needed, though Lenis usually persists or handles its own cleanup on unmount for SPA
      lenis.destroy()
    }
  }, [])

  return (
    <Home />
  )
}

export default App
