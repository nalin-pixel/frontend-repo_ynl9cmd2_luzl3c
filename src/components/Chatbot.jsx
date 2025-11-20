import { useEffect, useRef, useState } from 'react'
import { SendHorizonal, Loader2 } from 'lucide-react'

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ne', label: 'Nepali' },
  { code: 'hi', label: 'Hindi' },
  { code: 'ar', label: 'Arabic' },
  { code: 'es', label: 'Spanish' },
]

export default function Chatbot({ open, onClose }) {
  const [sessionId, setSessionId] = useState(null)
  const [language, setLanguage] = useState('en')
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const viewportRef = useRef(null)

  useEffect(() => {
    if (open && messages.length === 0) {
      send("hello")
    }
  }, [open])

  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight
    }
  }, [messages])

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  async function send(text) {
    if (!text.trim()) return
    setLoading(true)
    setMessages((m) => [...m, { role: 'user', content: text }])
    try {
      const res = await fetch(`${baseUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, message: text, language })
      })
      const data = await res.json()
      setSessionId(data.session_id)
      setMessages((m) => [...m, { role: 'assistant', content: data.reply }])
    } catch (e) {
      setMessages((m) => [...m, { role: 'assistant', content: 'Connection error. Please try again.' }])
    } finally {
      setLoading(false)
      setInput('')
    }
  }

  return (
    <div id="assistant" className={`fixed inset-0 z-50 ${open ? '' : 'hidden'}`}>
      <div className="absolute inset-0 bg-slate-900/70" onClick={onClose} />
      <div className="relative z-10 max-w-3xl mx-auto mt-10 md:mt-20 bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/10">
          <div className="flex items-center gap-2 text-white">
            <span className="font-semibold">AI Assistant</span>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="bg-transparent border border-white/20 rounded px-2 py-1 text-sm">
              {languages.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
            </select>
          </div>
          <button onClick={onClose} className="text-blue-200 hover:text-white">Close</button>
        </div>

        <div ref={viewportRef} className="h-[55vh] md:h-[60vh] overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-slate-900 to-slate-800">
          {messages.map((m, i) => (
            <div key={i} className={`max-w-[85%] md:max-w-[70%] px-4 py-2 rounded-2xl ${m.role === 'user' ? 'ml-auto bg-blue-600 text-white' : 'bg-white/10 text-blue-100'}`}>
              {m.content}
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-2 text-blue-200">
              <Loader2 className="w-4 h-4 animate-spin" /> Typing...
            </div>
          )}
        </div>

        <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex items-center gap-2 p-3 bg-white/5 border-t border-white/10">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." className="flex-1 bg-transparent border border-white/20 rounded-xl px-3 py-2 text-white placeholder-blue-200/60" />
          <button disabled={loading} className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2">
            <SendHorizonal className="w-4 h-4" />
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
