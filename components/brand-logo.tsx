import Link from 'next/link'

import { cn } from '@/lib/utils'

type BrandLogoProps = {
  href?: string | null
  compact?: boolean
  inverse?: boolean
  className?: string
}

export function BrandLogo({ href = '/', compact = false, inverse = false, className }: BrandLogoProps) {
  const content = (
    <>
      <span
        className={cn(
          'grid h-9 w-9 shrink-0 place-items-center border text-[13px] font-semibold tracking-tight',
          inverse
            ? 'border-white/20 bg-white text-slate-950'
            : 'border-emerald-200 bg-emerald-50 text-emerald-700'
        )}
        aria-hidden="true"
      >
        JB
      </span>
      <span className="min-w-0 leading-none">
        <span
          className={cn(
            'block truncate text-sm font-semibold tracking-tight sm:text-base',
            inverse ? 'text-white' : 'text-slate-950'
          )}
        >
          Cr. Jorge Ricardo Bade
        </span>
        {!compact && (
          <span
            className={cn(
              'mt-1 block truncate text-[10px] font-semibold uppercase tracking-[0.18em]',
              inverse ? 'text-emerald-200' : 'text-emerald-700'
            )}
          >
            Estudio contable
          </span>
        )}
      </span>
    </>
  )

  if (href === null) {
    return <div className={cn('inline-flex items-center gap-3', className)}>{content}</div>
  }

  return (
    <Link href={href} className={cn('inline-flex min-w-0 items-center gap-3', className)}>
      {content}
    </Link>
  )
}
