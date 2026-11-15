import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import { usePageMotion, useScrolled } from './lib/motion'
import HomePage from './pages/HomePage'
import MembersPage from './pages/MembersPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'

function Shell() {
  const location = useLocation()
  usePageMotion(location.pathname)
  useScrolled()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="zen-shell">
      <div className="zen-ambient" aria-hidden="true">
        <span className="zen-ambient__glow zen-ambient__glow--a" />
        <span className="zen-ambient__glow zen-ambient__glow--b" />
      </div>
      <SiteHeader />
      <main className="zen-main" key={location.pathname}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/membros" element={<MembersPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}

export default App
