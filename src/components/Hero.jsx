import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onBookNow }) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            AI Booking Assistant
          </h1>
          <p className="mt-4 text-base md:text-lg text-blue-100/90">
            Automate customer conversations, collect details, and confirm bookings — in multiple languages.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={onBookNow} className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 transition">
              Book Now
            </button>
            <a href="#how" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition">
              How it works
            </a>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/20 to-slate-900" />
      </div>
    </section>
  )
}
