import { useState } from 'react'

export default function Booking({ backend }) {
  const [form, setForm] = useState({ name:'', email:'', phone:'', date:'', time:'', notes:'' })
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState('')
  const [status, setStatus] = useState('')

  const sendOtp = async () => {
    setStatus('Sending OTP...')
    try {
      const res = await fetch(`${backend}/auth/otp/start`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ channel:'email', target: form.email, purpose:'booking' }) })
      const data = await res.json()
      if (data.sent) { setOtpSent(true); setStatus('OTP sent. Use 123456 in this demo.') }
    } catch (e) { setStatus('Failed to send OTP') }
  }

  const submitBooking = async () => {
    setStatus('Verifying OTP...')
    const v = await fetch(`${backend}/auth/otp/verify`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ target: form.email, code: otp, purpose:'booking' }) })
    if (!v.ok) { setStatus('Invalid OTP'); return }
    setStatus('Booking...')
    const res = await fetch(`${backend}/appointment`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name: form.name, user_email: form.email, phone: form.phone, date: form.date, time: form.time, notes: form.notes }) })
    if (res.ok) setStatus('Appointment booked! We will confirm shortly.')
    else setStatus('Booking failed')
  }

  return (
    <section id="booking" className="py-16 sm:py-24 bg-slate-900/40">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Book a Session</h2>
        <p className="text-slate-300 mt-2">Select a date/time and verify via OTP.</p>
        <div className="mt-6 grid gap-3 bg-white/5 border border-white/10 rounded-xl p-6">
          <input required placeholder="Full name" className="rounded-md bg-transparent border border-white/15 px-3 py-2" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
          <input required type="email" placeholder="Email" className="rounded-md bg-transparent border border-white/15 px-3 py-2" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
          <input placeholder="Phone" className="rounded-md bg-transparent border border-white/15 px-3 py-2" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input required type="date" className="rounded-md bg-transparent border border-white/15 px-3 py-2" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} />
            <input required type="time" className="rounded-md bg-transparent border border-white/15 px-3 py-2" value={form.time} onChange={e=>setForm({...form, time:e.target.value})} />
          </div>
          <textarea placeholder="Notes" className="rounded-md bg-transparent border border-white/15 px-3 py-2 min-h-[100px]" value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} />
          {!otpSent ? (
            <button onClick={sendOtp} className="inline-flex items-center justify-center rounded-md bg-teal-500 text-slate-900 font-semibold px-4 py-2 hover:bg-teal-400">Send OTP</button>
          ) : (
            <div className="grid gap-3 sm:flex sm:items-center">
              <input placeholder="Enter OTP" className="rounded-md bg-transparent border border-white/15 px-3 py-2" value={otp} onChange={e=>setOtp(e.target.value)} />
              <button onClick={submitBooking} className="inline-flex items-center justify-center rounded-md bg-teal-500 text-slate-900 font-semibold px-4 py-2 hover:bg-teal-400">Confirm Booking</button>
            </div>
          )}
          {status && <p className="text-sm text-slate-300">{status}</p>}
        </div>
      </div>
    </section>
  )
}
