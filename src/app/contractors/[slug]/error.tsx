'use client'

import Link from 'next/link'

export default function Error() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <span className="text-5xl">⚠️</span>
      <h1 className="mt-6 text-2xl font-bold text-slate-900">Something went wrong</h1>
      <p className="mt-2 text-slate-500">We couldn&apos;t load this contractor profile. Please try again.</p>
      <Link
        href="/contractors"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-500 text-white font-medium hover:bg-brand-600 transition-colors"
      >
        Browse all contractors
      </Link>
    </div>
  )
}
