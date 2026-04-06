import Link from 'next/link'
import { TRADES } from '@/constants/trades'
import { FEATURED_CONTRACTORS } from '@/data/mockContractors'
import ContractorCard from '@/components/contractors/ContractorCard'

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 inline-block" />
            Singapore&apos;s Contractor Directory
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight max-w-3xl mx-auto">
            Find Trusted{' '}
            <span className="text-brand-500">Home Contractors</span>
            {' '}in Singapore
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-slate-500 max-w-xl mx-auto leading-relaxed">
            Browse verified plumbers, electricians, aircon specialists, and more.
            Contact them directly — no middlemen, no fuss.
          </p>

          {/* Search */}
          <form
            action="/contractors"
            method="GET"
            className="mt-8 flex gap-2 max-w-lg mx-auto"
          >
            <input
              type="search"
              name="q"
              placeholder="e.g. plumber, aircon servicing..."
              className="flex-1 px-5 py-3.5 rounded-full border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 shadow-sm"
            />
            <button
              type="submit"
              className="shrink-0 px-6 py-3.5 rounded-full bg-brand-500 text-white text-sm font-semibold hover:bg-brand-600 transition-colors shadow-sm"
            >
              Search
            </button>
          </form>

          {/* Trust chips */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-slate-500">
            {[
              { icon: '✓', text: 'Verified contractors' },
              { icon: '💬', text: 'Direct WhatsApp contact' },
              { icon: '🗂️', text: '14 trade categories' },
            ].map(({ icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
                <span>{icon}</span>
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────── */}
      <section className="bg-brand-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-3 divide-x divide-brand-500">
            {[
              { value: '14', label: 'Trade categories' },
              { value: '100+', label: 'Verified contractors' },
              { value: 'Free', label: 'No booking fees' },
            ].map(({ value, label }) => (
              <div key={label} className="py-6 text-center">
                <dt className="text-2xl sm:text-3xl font-bold">{value}</dt>
                <dd className="mt-0.5 text-sm text-brand-200">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Browse by Trade ───────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Browse by Trade</h2>
              <p className="mt-1 text-sm text-slate-500">What do you need done?</p>
            </div>
            <Link
              href="/contractors"
              className="text-sm text-brand-600 font-medium hover:text-brand-700 transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {TRADES.map((trade) => (
              <Link
                key={trade.value}
                href={`/contractors?trade=${trade.value}`}
                className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-white border border-slate-100 hover:border-brand-300 hover:shadow-sm transition-all"
              >
                <span className="text-3xl">{trade.icon}</span>
                <span className="text-xs font-medium text-slate-600 group-hover:text-brand-700 text-center leading-snug transition-colors">
                  {trade.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Search or browse',
                body: 'Find contractors by trade, name, or specialty. Filter by area served.',
                icon: '🔍',
              },
              {
                step: '2',
                title: 'Compare profiles',
                body: 'See years of experience, license numbers, areas covered, and specialties.',
                icon: '📋',
              },
              {
                step: '3',
                title: 'Contact directly',
                body: 'WhatsApp or call the contractor directly — no middlemen, no referral fees.',
                icon: '📲',
              },
            ].map(({ step, title, body, icon }) => (
              <div key={step} className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-3xl border border-brand-100">
                  {icon}
                </div>
                <div>
                  <div className="text-xs font-semibold text-brand-500 uppercase tracking-wider mb-1">Step {step}</div>
                  <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Contractors ──────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Featured Contractors</h2>
              <p className="mt-1 text-sm text-slate-500">
                Handpicked professionals trusted by Singapore homeowners
              </p>
            </div>
            <Link
              href="/contractors"
              className="hidden sm:block text-sm text-brand-600 font-medium hover:text-brand-700 transition-colors"
            >
              Browse all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED_CONTRACTORS.map((contractor) => (
              <ContractorCard key={contractor.id} contractor={contractor} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/contractors"
              className="inline-flex items-center gap-1.5 text-sm text-brand-600 font-medium"
            >
              Browse all contractors →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to find the right contractor?
          </h2>
          <p className="mt-3 text-brand-200 max-w-md mx-auto">
            Browse our full directory of verified tradespeople and connect with them directly via WhatsApp.
          </p>
          <Link
            href="/contractors"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand-600 text-base font-semibold hover:bg-brand-50 transition-colors shadow-sm"
          >
            Browse All Contractors
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
