import Link from 'next/link'

import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'

type BrandLogoProps = {
  href?: string | null
  /** Version chica de una linea, para barras fijas y paneles. */
  compact?: boolean
  /** Version clara sobre fondo oscuro. */
  inverse?: boolean
  className?: string
}

/**
 * Logotipo de Pauta en formato reducido.
 *
 * El masthead grande de la portada vive en components/diario/masthead.tsx.
 * Este componente es la version de servicio: header pegajoso, login y panel.
 */
export function BrandLogo({
  href = '/',
  compact = false,
  inverse = false,
  className,
}: BrandLogoProps) {
  const content = (
    <>
      <span
        className={cn(
          'grid h-9 w-9 shrink-0 place-items-center font-display text-lg font-black leading-none',
          inverse ? 'bg-white text-tinta' : 'bg-tinta text-white'
        )}
        aria-hidden="true"
      >
        P
      </span>
      <span className="min-w-0 leading-none">
        <span
          className={cn(
            'block truncate font-display text-base font-black uppercase tracking-[0.02em] sm:text-lg',
            inverse ? 'text-white' : 'text-tinta'
          )}
        >
          {siteConfig.nombreCompleto}
        </span>
        {!compact && (
          <span className="mt-1 block truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-rojo">
            {siteConfig.lema}
          </span>
        )}
      </span>
    </>
  )

  if (href === null) {
    return <div className={cn('inline-flex items-center gap-2.5', className)}>{content}</div>
  }

  return (
    <Link href={href} className={cn('inline-flex min-w-0 items-center gap-2.5', className)}>
      {content}
    </Link>
  )
}
