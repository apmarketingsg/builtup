import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { MOCK_CONTRACTORS } from '@/data/mockContractors'
import { TRADES } from '@/constants/trades'
import Badge from '@/components/ui/Badge'
import type { Contractor } from '@/types/contractor'

export const revalidate = 3600 // revalidate hourly

// ── Data helpers ─────────────────────────────────────────────────────────────

async function getContractor(slug: string): Promise<Contractor | null> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return MOCK_CONTRACTORS.find((c) => c.slug === slug) ?? null
  }

  const supabase = await createClient()
  const { data } = await supabase
    .from('contractors')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()

  return (data as Contractor | null) ?? null
}

export async function generateStaticParams() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return MOCK_CONTRACTORS.map((c) => ({ slug: c.slug }))
  }

  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from('contractors')
      .select('slug')
      .eq('is_active', true)
    return (data ?? []).map((c: { slug: string }) => ({ slug: c.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const contractor = await getContractor(slug)
  if (!contractor) return {}

  const trade = TRADES.find((t) => t.value === contractor.trade)
  const title = `${contractor.name} — ${trade?.label ?? contractor.trade}`
  const description = contractor.description?.slice(0, 155) ?? undefined
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://builtup.sg'
  const pageUrl = `${siteUrl}/contractors/${slug}`

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: 'profile',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  }
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function ContractorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const contractor = await getContractor(slug)
  if (!contractor) notFound()

  const trade = TRADES.find((t) => t.value === contractor.trade)
  const waMessage = encodeURIComponent(
    `Hi ${contractor.name}, I found you on BuiltUp and would like to enquire about your services.`,
  )
  const waHref = `https://wa.me/${contractor.phone.replace(/\D/g, '')}?text=${waMessage}`

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back link */}
      <Link
        href="/contractors"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-600 transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        All Contractors
      </Link>

      <div className="lg:grid lg:grid-cols-3 lg:gap-10">
        {/* ── Left: Profile ─────────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <div className="flex items-start gap-5">
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-4xl">
              {trade?.icon ?? '🔨'}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                {contractor.name}
              </h1>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="brand">
                  {trade?.icon} {trade?.label ?? contractor.trade}
                </Badge>
                {contractor.is_featured && (
                  <Badge variant="amber">Featured</Badge>
                )}
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong className="text-slate-900">{contractor.years_exp}</strong> years experience</span>
            </div>
            {contractor.license_no && (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>License: <strong className="text-slate-900">{contractor.license_no}</strong></span>
              </div>
            )}
          </div>

          {/* Description */}
          {contractor.description && (
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-3">About</h2>
              <p className="text-slate-600 leading-relaxed">{contractor.description}</p>
            </section>
          )}

          {/* Specialties */}
          {contractor.specialties.length > 0 && (
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-3">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {contractor.specialties.map((s) => (
                  <Badge key={s} variant="slate">{s}</Badge>
                ))}
              </div>
            </section>
          )}

          {/* Areas served */}
          {contractor.area_served && contractor.area_served.length > 0 && (
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-3">Areas Served</h2>
              <div className="flex flex-wrap gap-2">
                {contractor.area_served.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-600"
                  >
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {area}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* ── Right: Contact card ───────────────────────────────────── */}
        <div className="mt-10 lg:mt-0">
          <div className="lg:sticky lg:top-24 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
            <h2 className="font-semibold text-slate-900">Get in touch</h2>

            {/* WhatsApp */}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-whatsapp text-white font-semibold hover:bg-whatsapp-dark transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.549 4.107 1.508 5.837L.057 23.886a.5.5 0 00.609.608l6.123-1.434A11.945 11.945 0 0012 24c6.626 0 12-5.373 12-12S18.626 0 12 0zm0 21.818a9.818 9.818 0 01-4.988-1.357l-.356-.213-3.724.872.9-3.634-.233-.374A9.82 9.82 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
              </svg>
              WhatsApp
            </a>

            <div className="space-y-3 pt-1">
              {/* Phone */}
              <a
                href={`tel:${contractor.phone}`}
                className="flex items-center gap-3 text-sm text-slate-700 hover:text-brand-600 transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                {contractor.phone}
              </a>

              {/* Email */}
              {contractor.email && (
                <a
                  href={`mailto:${contractor.email}`}
                  className="flex items-center gap-3 text-sm text-slate-700 hover:text-brand-600 transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  {contractor.email}
                </a>
              )}

              {/* Website */}
              {contractor.website && (
                <a
                  href={contractor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-700 hover:text-brand-600 transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                  Visit website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
