import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'whatsapp'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
        size === 'sm' && 'px-4 py-1.5 text-sm',
        size === 'md' && 'px-5 py-2.5 text-sm',
        size === 'lg' && 'px-7 py-3.5 text-base',
        variant === 'primary' && 'bg-brand-500 text-white hover:bg-brand-600',
        variant === 'outline' &&
          'border border-slate-200 text-slate-700 bg-white hover:bg-slate-50',
        variant === 'whatsapp' && 'bg-whatsapp text-white hover:bg-whatsapp-dark',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
