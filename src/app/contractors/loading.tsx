export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <div className="h-8 w-56 rounded-lg bg-slate-200 animate-pulse" />
        <div className="h-5 w-36 rounded-lg bg-slate-100 animate-pulse" />
      </div>

      {/* Pills */}
      <div className="flex gap-2 overflow-hidden pb-1">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="shrink-0 h-9 rounded-full bg-slate-100 animate-pulse"
            style={{ width: `${72 + (i % 3) * 20}px` }}
          />
        ))}
      </div>

      {/* Search bar */}
      <div className="mt-4 flex gap-2 max-w-lg">
        <div className="flex-1 h-10 rounded-full bg-slate-100 animate-pulse" />
        <div className="w-20 h-10 rounded-full bg-slate-100 animate-pulse" />
      </div>

      {/* Card grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-slate-100 p-5 space-y-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-2 flex-1">
                <div className="h-5 w-3/4 rounded bg-slate-200 animate-pulse" />
                <div className="h-4 w-24 rounded-full bg-slate-100 animate-pulse" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 animate-pulse shrink-0" />
            </div>
            <div className="space-y-1.5">
              <div className="h-4 w-full rounded bg-slate-100 animate-pulse" />
              <div className="h-4 w-5/6 rounded bg-slate-100 animate-pulse" />
            </div>
            <div className="flex gap-2">
              <div className="h-4 w-20 rounded bg-slate-100 animate-pulse" />
              <div className="h-4 w-28 rounded bg-slate-100 animate-pulse" />
            </div>
            <div className="flex gap-2 pt-1">
              <div className="flex-1 h-10 rounded-full bg-slate-100 animate-pulse" />
              <div className="flex-1 h-10 rounded-full bg-slate-100 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
