import type { Metadata } from 'next'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { MOCK_CONTRACTORS } from '@/data/mockContractors'
import { TRADES } from '@/constants/trades'
import ContractorCard from '@/components/contractors/ContractorCard'
import ContractorFilters from '@/components/contractors/ContractorFilters'
import type { Contractor } from '@/types/contractor'

export const metadata: Metadata = {
  title: 'Browse Contractors — BuiltUp',
  description:
    'Find verified plumbers, electricians, aircon specialists, painters, and more in Singapore.',
}

async function getContractors({
  trade,
  q,
}: {
  trade?: string
  q?: string
}): Promise<Contractor[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return MOCK_CONTRACTORS.filter((c) => {
      if (!c.is_active) return false
      if (trade && c.trade !== trade) return false
      if (q) {
        const lower = q.toLowerCase()
        return (
          c.name.toLowerCase().includes(lower) ||
          c.trade.toLowerCase().includes(lower) ||
          c.description.toLowerCase().includes(lower) ||
          c.specialties.some((s) => s.toLowerCase().includes(lower))
        )
      }
      return true
    })
  }

  const supabase = await createClient()
  let query = supabase
    .from('contractors')
    .select('*')
    .eq('is_active', true)
    .order('is_featured', { ascending: false })
    .order('name')

  if (trade) query = query.eq('trade', trade)
  if (q)
    query = query.textSearch('search_vector', q, {
      type: 'websearch',
      config: 'english',
    })

  const { data, error } = await query
  if (error) return []
  return (data ?? []) as Contractor[]
}

export default async function ContractorsPage({
  searchParams,
}: {
  searchParams: Promise<{ trade?: string; q?: string }>
}) {
  const { trade, q } = await searchParams
  const contractors = await getContractors({ trade, q })

  const tradeLabel = trade ? TRADES.find((t) => t.value === trade)?.label : undefined
  const count = contractors.length

  // Human-readable filter summary
  const summary = [
    tradeLabel,
    q ? `"${q}"` : undefined,
  ]
    .filter(Boolean)
    .join(' · ')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Browse Contractors</h1>
        <p className="mt-1 text-slate-500">
          {count} contractor{count !== 1 ? 's' : ''}
          {summary ? ` · ${summary}` : ' in Singapore'}
        </p>
      </div>

      {/* Filters */}
      <ContractorFilters currentTrade={trade} currentQ={q} />

      {/* Results */}
      {count > 0 ? (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contractors.map((contractor) => (
            <ContractorCard key={contractor.id} contractor={contractor} />
          ))}
        </div>
      ) : (
        <div className="mt-20 flex flex-col items-center text-center gap-3">
          <span className="text-5xl">🔍</span>
          <h2 className="text-xl font-semibold text-slate-900">No contractors found</h2>
          <p className="text-slate-500 max-w-xs">
            Try a different trade or search term.
          </p>
          <Link
            href="/contractors"
            className="mt-2 px-5 py-2.5 rounded-full bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors"
          >
            Clear filters
          </Link>
        </div>
      )}
    </div>
  )
}
