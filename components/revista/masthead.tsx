import Link from 'next/link'

import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'
import { fechaDeTapa } from '@/lib/portada'

type MastheadProps = {
  /** 'tapa' es el logotipo grande de portada; 'interior' va en el resto. */
  tamano?: 'tapa' | 'interior'
  className?: string
}

/**
 * Cabecera tipografica de la revista.
 *
 * A diferencia de un diario, el logotipo manda solo: mucho aire alrededor,
 * la fecha en un segundo plano y el lema como unica linea de apoyo.
 */
export function Masthead({ tamano = 'tapa', className }: MastheadProps) {
  const esTapa = tamano === 'tapa'

  return (
    <div className={cn('border-b border-filete bg-papel', className)}>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className={cn('text-center', esTapa ? 'py-10 sm:py-14' : 'py-5 sm:py-6')}>
          {esTapa && (
            <p className="meta mb-6" suppressHydrationWarning>
              {fechaDeTapa()} &middot; {siteConfig.ciudad}
            </p>
          )}

          <Link href="/" className="inline-block">
            <span
              className={cn(
                'block font-display font-black uppercase leading-[0.84] text-tinta',
                esTapa
                  ? 'text-[2.9rem] tracking-[-0.015em] sm:text-7xl md:text-[5.5rem]'
                  : 'text-3xl tracking-[-0.01em] sm:text-4xl'
              )}
            >
              {siteConfig.tipo}{' '}
              <span className="text-rojo">{siteConfig.marca}</span>
            </span>
          </Link>

          {esTapa && (
            <>
              {/* Filete corto centrado: firma grafica de la tapa. */}
              <span
                className="mx-auto mt-7 block h-px w-24 bg-filete-fuerte"
                aria-hidden="true"
              />
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-tinta-3">
                {siteConfig.lema}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
