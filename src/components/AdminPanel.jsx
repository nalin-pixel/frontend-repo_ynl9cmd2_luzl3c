import { useEffect, useState } from 'react'
import { RefreshCw } from 'lucide-react'

export default function AdminPanel() {
  const [interactions, setInteractions] = useState([])
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(false)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  async function load() {
    setLoading(true)
    try {
      const [logsRes, bookingsRes] = await Promise.all([
        fetch(`${baseUrl}/api/interactions`).then(r => r.json()),
        fetch(`${baseUrl}/api/bookings`).then(r => r.json()),
      ])
      setInteractions(logsRes.items || [])
      setBookings(bookingsRes.items || [])
    } catch (e) {
      // ignore
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Admin Panel</h2>
        <button onClick={load} className="text-white bg-white/10 hover:bg-white/20 border border-white/10 px-3 py-2 rounded-xl flex gap-2 items-center">
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Refresh
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white">
          <h3 className="font-semibold mb-3">Recent Interactions</h3>
          <div className="space-y-3 max-h-[40vh] overflow-auto pr-1">
            {interactions.map((it) => (
              <div key={it._id} className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-xs text-blue-200/70">{it.session_id} • {it.language} • {it.role}</div>
                <div className="mt-1 text-blue-100">{it.message}</div>
              </div>
            ))}
            {interactions.length === 0 && (
              <p className="text-blue-200/70">No interactions yet.</p>
            )}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white">
          <h3 className="font-semibold mb-3">Bookings</h3>
          <div className="space-y-3 max-h-[40vh] overflow-auto pr-1">
            {bookings.map((b, i) => (
              <div key={b._id || i} className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-xs text-blue-200/70">{b.language} • {b.status || 'confirmed'}</div>
                <div className="mt-1 text-blue-100">{b.name} — {b.service}</div>
                <div className="text-blue-200/70">{b.date} {b.time} • {b.phone}</div>
                <div className="text-blue-200/70">{b.location}</div>
              </div>
            ))}
            {bookings.length === 0 && (
              <p className="text-blue-200/70">No bookings yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
