import { CheckCircle2, Clock, FileText, ShieldCheck, MessageSquare, Phone } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">About SAKSHAM PRAVESH</h2>
          <p className="mt-4 text-slate-300">Founded by Shreyash Suryawanshi, we help MHT CET aspirants navigate the entire counselling journey with clarity and confidence. From registration to seat allotment, we stand with you at every step.</p>
          <ul className="mt-6 space-y-3 text-slate-200">
            <li className="flex items-center gap-2"><ShieldCheck className="text-teal-400" /> Ethical, student-first guidance</li>
            <li className="flex items-center gap-2"><Clock className="text-teal-400" /> Quick response and on-time reminders</li>
            <li className="flex items-center gap-2"><FileText className="text-teal-400" /> Document checklist and templates</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-white/10 p-6">
          <h3 className="font-semibold">What we cover</h3>
          <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
            {['Registration','Choice Filling','College Shortlisting','Document Verification','Cutoff Insights','Round-wise Strategy'].map(x => (
              <span key={x} className="bg-white/5 border border-white/10 rounded-md px-3 py-2">{x}</span>
            ))}
          </div>
          <a href="#packages" className="mt-6 inline-flex items-center gap-2 text-teal-300 hover:text-teal-200">Explore Packages <CheckCircle2 className="w-4 h-4" /></a>
        </div>
      </div>
    </section>
  )
}

export function Packages() {
  const tiers = [
    { slug:'starter', title:'Starter', price:'₹999', features:['One-time session','Basic document checklist','WhatsApp support (3 days)'], popular:false },
    { slug:'pro', title:'Pro', price:'₹2,999', features:['3 sessions','Choice filling support','Priority WhatsApp support'], popular:true },
    { slug:'elite', title:'Elite', price:'₹6,999', features:['End-to-end guidance','College prediction','On-call priority support'], popular:false },
  ]
  return (
    <section id="packages" className="py-16 sm:py-24 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Counselling Packages</h2>
        <p className="text-slate-300 mt-2">Pick a plan that fits your journey. Upgrade anytime.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map(t => (
            <div key={t.slug} className={`rounded-2xl border ${t.popular ? 'border-teal-400' : 'border-white/10'} bg-white/[0.03] p-6 flex flex-col`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{t.title}</h3>
                {t.popular && <span className="text-xs px-2 py-1 rounded bg-teal-500 text-slate-900 font-bold">Popular</span>}
              </div>
              <p className="mt-4 text-3xl font-extrabold">{t.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {t.features.map(f => <li key={f} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5" />{f}</li>)}
              </ul>
              <a href="#booking" className="mt-6 inline-flex items-center justify-center rounded-md bg-teal-500 text-slate-900 font-semibold px-4 py-2 hover:bg-teal-400">Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Process() {
  const steps = [
    {title:'Sign up / Login', desc:'Create your account and verify via OTP'},
    {title:'Pick a package', desc:'Choose a plan that suits you'},
    {title:'Book a slot', desc:'Select a date and time that works'},
    {title:'Get guidance', desc:'Join the session and receive resources'},
  ]
  return (
    <section id="process" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold">How It Works</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s,i) => (
            <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-6">
              <div className="text-teal-300 text-sm font-semibold">Step {i+1}</div>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Resources() {
  return (
    <section id="resources" className="py-16 sm:py-24 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Resources</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 border border-white/10 bg-white/5">
            <h3 className="font-semibold">Downloads</h3>
            <ul className="mt-3 list-disc ml-5 text-slate-300 text-sm">
              <li>Document Checklist (PDF)</li>
              <li>Choice Filling Guide (PDF)</li>
            </ul>
          </div>
          <div className="rounded-xl p-6 border border-white/10 bg-white/5">
            <h3 className="font-semibold">FAQs</h3>
            <details className="mt-3">
              <summary className="cursor-pointer text-sm">When does counselling start?</summary>
              <p className="text-slate-300 text-sm mt-2">Dates will be announced by CET Cell. We’ll notify you post registration.</p>
            </details>
            <details className="mt-3">
              <summary className="cursor-pointer text-sm">Do you help with documents?</summary>
              <p className="text-slate-300 text-sm mt-2">Yes, we share a checklist and review uploads.</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Contact</h2>
          <p className="mt-3 text-slate-300">Reach out for guidance or bulk enquiries.</p>
          <div className="mt-6 flex items-center gap-3 text-slate-200">
            <Phone className="text-teal-400" /> <span>+91-XXXXXXXXXX</span>
          </div>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-teal-300 hover:text-teal-200"><MessageSquare className="w-4 h-4" /> WhatsApp</a>
        </div>
        <form className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3" onSubmit={(e)=>e.preventDefault()}>
          <input aria-label="Name" placeholder="Name" className="w-full rounded-md bg-transparent border border-white/15 px-3 py-2" />
          <input aria-label="Email" placeholder="Email" type="email" className="w-full rounded-md bg-transparent border border-white/15 px-3 py-2" />
          <textarea aria-label="Message" placeholder="Message" className="w-full rounded-md bg-transparent border border-white/15 px-3 py-2 min-h-[120px]" />
          <button className="inline-flex items-center justify-center rounded-md bg-teal-500 text-slate-900 font-semibold px-4 py-2 hover:bg-teal-400">Send</button>
        </form>
      </div>
    </section>
  )
}
