import { useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Packages, Process, Resources, Contact } from './components/Sections'
import Booking from './components/Booking'

function App() {
  const backend = useMemo(() => import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000', [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Packages />
        <Process />
        <Resources />
        <Booking backend={backend} />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} SAKSHAM PRAVESH — Shreyash Suryawanshi. All rights reserved.
      </footer>
    </div>
  )
}

export default App
