import { useState } from 'react'
import Hero from './components/Hero'
import { Services, HowItWorks, Testimonials, ContactSection } from './components/Sections'
import Chatbot from './components/Chatbot'
import AdminPanel from './components/AdminPanel'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg" />
            <span className="font-bold">AI Booking Assistant</span>
          </div>
          <div className="flex gap-3">
            <a href="#services" className="text-blue-100 hover:text-white">Services</a>
            <a href="#how" className="text-blue-100 hover:text-white">How it works</a>
            <a href="#contact" className="text-blue-100 hover:text-white">Contact</a>
            <button onClick={() => setOpen(true)} className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white">Book Now</button>
          </div>
        </div>
      </header>

      <main>
        <Hero onBookNow={() => setOpen(true)} />
        <Services />
        <HowItWorks />
        <Testimonials />
        <AdminPanel />
        <ContactSection />
      </main>

      <footer className="border-t border-white/10">
        <div className="container mx-auto px-6 py-8 text-center text-blue-200/70">
          © {new Date().getFullYear()} AI Booking Assistant. All rights reserved.
        </div>
      </footer>

      <Chatbot open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export default App
