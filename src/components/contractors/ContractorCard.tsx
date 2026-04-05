import Link from 'next/link'
import type { Contractor } from '@/types/contractor'
import Badge from '@/components/ui/Badge'
import { TRADES } from '@/constants/trades'

interface ContractorCardProps {
  contractor: Contractor
}

export default function ContractorCard({ contractor }: ContractorCardProps) {
  const trade = TRADES.find((t) => t.value === contractor.trade)
  const waMessage = encodeURIComponent(
    `Hi ${contractor.name}, I found you on BuiltUp and would like to enquire about your services.`,
  )
  const waHref = `https://wa.me/${contractor.phone.replace(/\D/g, '')}?text=${waMessage}`

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-slate-900 text-base leading-snug">
            {contractor.name}
          </h3>
          <div className="mt-1 flex flex-wrap gap-1.5">
            <Badge variant="brand">
              {trade?.icon} {trade?.label ?? contractor.trade}
            </Badge>
            {contractor.is_featured && (
              <Badge variant="amber">Featured</Badge>
            )}
          </div>
        </div>
        <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-2xl">
          {trade?.icon ?? '🔨'}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
        {contractor.description}
      </p>

      {/* Meta */}
      <div className="flex flex-wrap gap-3 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {contractor.years_exp} yrs exp
        </span>
        {contractor.area_served.length > 0 && (
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {contractor.area_served.slice(0, 2).join(', ')}
            {contractor.area_served.length > 2 && ` +${contractor.area_served.length - 2}`}
          </span>
        )}
      </div>

      {/* Specialties */}
      {contractor.specialties.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {contractor.specialties.slice(0, 3).map((s) => (
            <Badge key={s} variant="slate">{s}</Badge>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2 mt-auto pt-1">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-whatsapp text-white text-sm font-medium hover:bg-whatsapp-dark transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.549 4.107 1.508 5.837L.057 23.886a.5.5 0 00.609.608l6.123-1.434A11.945 11.945 0 0012 24c6.626 0 12-5.373 12-12S18.626 0 12 0zm0 21.818a9.818 9.818 0 01-4.988-1.357l-.356-.213-3.724.872.9-3.634-.233-.374A9.82 9.82 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
          </svg>
          WhatsApp
        </a>
        <Link
          href={`/contractors/${contractor.slug}`}
          className="flex-1 flex items-center justify-center py-2.5 rounded-full border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  )
}
