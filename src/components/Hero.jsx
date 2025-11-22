import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl">
            <p className="text-teal-300 font-semibold tracking-wide uppercase text-xs sm:text-sm">MHT CET 2025 Counselling</p>
            <h1 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              SAKSHAM PRAVESH
            </h1>
            <p className="mt-4 text-slate-200 max-w-2xl">
              Personalized guidance for registration, choice filling, document verification, and admission strategy — by Shreyash Suryawanshi.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#packages" className="inline-flex items-center justify-center rounded-md bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-5 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-300">View Packages</a>
              <a href="#booking" className="inline-flex items-center justify-center rounded-md border border-teal-300/40 hover:bg-white/10 px-5 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-300">Book a Session</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
    </section>
  )
}
