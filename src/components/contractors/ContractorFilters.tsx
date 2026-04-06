import Link from 'next/link'
import { TRADES } from '@/constants/trades'

interface ContractorFiltersProps {
  currentTrade?: string
  currentQ?: string
}

function pillClass(active: boolean) {
  return [
    'shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors',
    active
      ? 'bg-brand-500 text-white'
      : 'bg-white border border-slate-200 text-slate-600 hover:border-brand-300 hover:text-brand-700',
  ].join(' ')
}

export default function ContractorFilters({ currentTrade, currentQ }: ContractorFiltersProps) {
  const qParam = currentQ ? `&q=${encodeURIComponent(currentQ)}` : ''

  return (
    <div className="space-y-4">
      {/* Trade pills — horizontal scroll on mobile */}
      <div className="overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex gap-2 min-w-max">
          {/* All pill */}
          <Link
            href={currentQ ? `/contractors?q=${encodeURIComponent(currentQ)}` : '/contractors'}
            className={pillClass(!currentTrade)}
          >
            All
          </Link>

          {TRADES.map((trade) => {
            const isActive = trade.value === currentTrade
            const href = isActive
              ? currentQ
                ? `/contractors?q=${encodeURIComponent(currentQ)}`
                : '/contractors'
              : `/contractors?trade=${trade.value}${qParam}`

            return (
              <Link key={trade.value} href={href} className={pillClass(isActive)}>
                <span>{trade.icon}</span>
                {trade.label}
              </Link>
            )
          })}
        </div>
      </div>

      {/* Search form */}
      <form action="/contractors" method="GET" className="flex gap-2 max-w-lg">
        {currentTrade && (
          <input type="hidden" name="trade" value={currentTrade} />
        )}
        <div className="relative flex-1">
          <input
            type="search"
            name="q"
            defaultValue={currentQ}
            placeholder="Search by name or specialty..."
            className="w-full px-4 py-2.5 pr-10 rounded-full border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-brand-400"
          />
          {currentQ && (
            <Link
              href={currentTrade ? `/contractors?trade=${currentTrade}` : '/contractors'}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Link>
          )}
        </div>
        <button
          type="submit"
          className="shrink-0 px-5 py-2.5 rounded-full bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  )
}
