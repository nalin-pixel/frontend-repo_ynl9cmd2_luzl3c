import { MessageSquare, Globe, CheckCircle2, Send, Shield, Workflow } from 'lucide-react'

export function Services() {
  const items = [
    { title: 'Customer Support', desc: 'Answer questions 24/7 with a natural, friendly tone.' },
    { title: 'Service Booking', desc: 'Collect details and confirm appointments automatically.' },
    { title: 'Upsell & Cross-sell', desc: 'Recommend add-ons and boost revenue with smart prompts.' },
  ]
  return (
    <section id="services" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Services Offered</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-white">
            <MessageSquare className="w-6 h-6 text-blue-400" />
            <h3 className="mt-3 font-semibold text-lg">{it.title}</h3>
            <p className="mt-2 text-blue-100/80">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function HowItWorks() {
  const steps = [
    { icon: Globe, title: 'Multilingual', desc: 'English, Nepali, Hindi, Arabic, Spanish — switch instantly.' },
    { icon: Workflow, title: 'Smart Flow', desc: 'Understands intent and fills booking form automatically.' },
    { icon: Send, title: 'WhatsApp', desc: 'Sends booking summary and confirmation to your number.' },
  ]
  return (
    <section id="how" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center">How the AI Agent Works</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div key={s.title} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-white">
            <s.icon className="w-6 h-6 text-blue-400" />
            <h3 className="mt-3 font-semibold text-lg">{s.title}</h3>
            <p className="mt-2 text-blue-100/80">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Testimonials() {
  const quotes = [
    { name: 'Aisha K.', text: 'We closed bookings 3x faster — customers love the experience.' },
    { name: 'Rahul S.', text: 'Multilingual chats helped us reach new clients easily.' },
    { name: 'María L.', text: 'Setup was quick. Now our WhatsApp gets instant confirmations.' },
  ]
  return (
    <section id="testimonials" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center">What Customers Say</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {quotes.map((q) => (
          <div key={q.name} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-white">
            <CheckCircle2 className="w-6 h-6 text-blue-400" />
            <p className="mt-3 text-blue-100/90">“{q.text}”</p>
            <p className="mt-2 text-sm text-blue-200/70">— {q.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-6 py-20">
      <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold">Have questions?</h3>
          <p className="text-blue-100/80">Chat with the AI or message us directly on WhatsApp.</p>
        </div>
        <div className="flex gap-3">
          <a href="#assistant" className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold">Open Assistant</a>
          <a href="https://wa.me/" target="_blank" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold">WhatsApp</a>
        </div>
      </div>
    </section>
  )
}
