import Link from 'next/link'
import { TRADES } from '@/constants/trades'
import { FEATURED_CONTRACTORS } from '@/data/mockContractors'
import ContractorCard from '@/components/contractors/ContractorCard'

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400 text-white overflow-hidden">
        {/* subtle pattern */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Find Trusted Contractors
              <br />
              <span className="text-brand-100">in Singapore</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-brand-100 leading-relaxed">
              Browse verified plumbers, electricians, aircon technicians, and more.
              Contact them directly — no middlemen, no fuss.
            </p>

            {/* Search bar */}
            <form
              action="/contractors"
              method="GET"
              className="mt-8 flex gap-2 w-full max-w-xl"
            >
              <input
                type="search"
                name="q"
                placeholder="Search by trade, name, or specialty..."
                className="flex-1 px-5 py-3.5 rounded-full text-slate-900 text-sm placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-white/50 shadow-sm"
              />
              <button
                type="submit"
                className="shrink-0 px-6 py-3.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
              >
                Search
              </button>
            </form>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-brand-100">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Verified contractors
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Direct WhatsApp contact
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                10 trade categories
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Browse by Trade ───────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Browse by Trade</h2>
            <Link
              href="/contractors"
              className="text-sm text-brand-600 font-medium hover:text-brand-700 transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {TRADES.map((trade) => (
              <Link
                key={trade.value}
                href={`/contractors?trade=${trade.value}`}
                className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-slate-100 bg-white hover:border-brand-200 hover:bg-brand-50 hover:shadow-sm transition-all"
              >
                <span className="text-3xl">{trade.icon}</span>
                <span className="text-sm font-medium text-slate-700 group-hover:text-brand-700 text-center leading-tight transition-colors">
                  {trade.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Contractors ──────────────────────────────────────── */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
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
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Ready to find the right contractor?
          </h2>
          <p className="mt-3 text-slate-500 max-w-md mx-auto">
            Browse our full directory of verified tradespeople and connect with them directly via WhatsApp.
          </p>
          <Link
            href="/contractors"
            className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-500 text-white text-base font-medium hover:bg-brand-600 transition-colors shadow-sm"
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
