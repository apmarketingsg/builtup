import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'brand' | 'slate' | 'amber'
  className?: string
}

export default function Badge({ children, variant = 'brand', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variant === 'brand' && 'bg-brand-100 text-brand-700',
        variant === 'slate' && 'bg-slate-100 text-slate-700',
        variant === 'amber' && 'bg-amber-100 text-amber-700',
        className,
      )}
    >
      {children}
    </span>
  )
}
