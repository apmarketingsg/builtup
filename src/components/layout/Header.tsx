import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-brand-600 tracking-tight">
              Built<span className="text-slate-800">Up</span>
            </span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/contractors"
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              Browse Contractors
            </Link>
            <Link
              href="/contractors"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors"
            >
              Find a Contractor
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
