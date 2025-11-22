import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const nav = (
    <nav className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-sm">
      <a href="#about" className="hover:text-teal-300">About</a>
      <a href="#packages" className="hover:text-teal-300">Services</a>
      <a href="#process" className="hover:text-teal-300">How It Works</a>
      <a href="#resources" className="hover:text-teal-300">Resources</a>
      <a href="#testimonials" className="hover:text-teal-300">Testimonials</a>
      <a href="#blog" className="hover:text-teal-300">Blog</a>
      <a href="#contact" className="hover:text-teal-300">Contact</a>
      <a href="#booking" className="inline-flex items-center rounded-md bg-teal-500 text-slate-900 font-semibold px-4 py-2 hover:bg-teal-400">Book Now</a>
    </nav>
  )

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-xl">
          <span className="text-teal-400">Saksham</span> Pravesh
        </a>
        <div className="hidden md:block">{nav}</div>
        <button className="md:hidden" aria-label="Toggle Menu" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && <div className="md:hidden border-t border-white/10 px-6 pb-4">{nav}</div>}
    </header>
  )
}
