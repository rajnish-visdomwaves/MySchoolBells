import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '@/pages/Home'
import AutomatedSchedules from '@/pages/features/AutomatedSchedules'
import CustomAlerts from '@/pages/features/CustomAlerts'
import MusicIntegration from '@/pages/features/MusicIntegration'
import ZoneControl from '@/pages/features/ZoneControl'
import WebDashboard from '@/pages/features/WebDashboard'
import SmartIntegration from '@/pages/features/SmartIntegration'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    // Disable browser's default scroll restoration to handle it manually
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features/automated-schedules" element={<AutomatedSchedules />} />
      <Route path="/features/custom-alerts" element={<CustomAlerts />} />
      <Route path="/features/music-integration" element={<MusicIntegration />} />
      <Route path="/features/zone-control" element={<ZoneControl />} />
      <Route path="/features/web-dashboard" element={<WebDashboard />} />
      <Route path="/features/smart-integration" element={<SmartIntegration />} />
    </Routes>
  )
}

export default App


