import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Built<span className="text-brand-400">Up</span>
            </span>
            <p className="mt-2 text-sm leading-relaxed">
              Singapore&apos;s trusted contractor directory. Find reliable tradespeople for your home.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Browse
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contractors" className="hover:text-white transition-colors">All Contractors</Link></li>
              <li><Link href="/contractors?trade=plumber" className="hover:text-white transition-colors">Plumbers</Link></li>
              <li><Link href="/contractors?trade=electrician" className="hover:text-white transition-colors">Electricians</Link></li>
              <li><Link href="/contractors?trade=aircon" className="hover:text-white transition-colors">Aircon Servicing</Link></li>
              <li><Link href="/contractors?trade=renovation" className="hover:text-white transition-colors">Renovation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Info
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-slate-500">For Contractors (coming soon)</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-500 text-center">
          © {new Date().getFullYear()} BuiltUp — Singapore Contractor Directory. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
