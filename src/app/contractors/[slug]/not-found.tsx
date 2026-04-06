import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <span className="text-5xl">🔧</span>
      <h1 className="mt-6 text-2xl font-bold text-slate-900">Contractor not found</h1>
      <p className="mt-2 text-slate-500">
        This contractor may have been removed or the link is incorrect.
      </p>
      <Link
        href="/contractors"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-500 text-white font-medium hover:bg-brand-600 transition-colors"
      >
        Browse all contractors
      </Link>
    </div>
  )
}
