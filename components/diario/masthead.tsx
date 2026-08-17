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
 * Cabecera tipografica del diario: fecha, logotipo y datos de edicion,
 * encerrados entre los dos filetes horizontales de la primera plana.
 */
export function Masthead({ tamano = 'tapa', className }: MastheadProps) {
  const esTapa = tamano === 'tapa'

  return (
    <div className={cn('border-b-[3px] border-filete-fuerte bg-papel', className)}>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div
          className={cn(
            'grid items-center gap-2 border-b border-filete',
            esTapa ? 'py-5 sm:py-7' : 'py-3',
            'grid-cols-1 sm:grid-cols-[1fr_auto_1fr]'
          )}
        >
          {/* Columna izquierda: fecha de la edicion. */}
          <div className="hidden sm:block">
            <p className="meta" suppressHydrationWarning>
              {fechaDeTapa()}
            </p>
            <p className="meta mt-1">{siteConfig.ciudad}</p>
          </div>

          {/* Centro: el logotipo. */}
          <div className="text-center">
            <Link href="/" className="inline-block">
              <span
                className={cn(
                  'block font-display font-black uppercase leading-[0.86] text-tinta',
                  esTapa
                    ? 'text-[2.6rem] tracking-[0.01em] sm:text-6xl md:text-7xl'
                    : 'text-3xl sm:text-4xl'
                )}
              >
                {siteConfig.tipo}{' '}
                <span className="text-rojo">{siteConfig.marca}</span>
              </span>
            </Link>
            {esTapa && (
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-tinta-3">
                {siteConfig.lema}
              </p>
            )}
          </div>

          {/* Columna derecha: datos de edicion. */}
          <div className="hidden text-right sm:block">
            <p className="meta">Edicion digital</p>
            <p className="meta mt-1">Ano {new Date().getFullYear() - siteConfig.fundado + 1}</p>
          </div>

          {/* En mobile la fecha va abajo, centrada. */}
          <p className="meta text-center sm:hidden" suppressHydrationWarning>
            {fechaDeTapa()}
          </p>
        </div>
      </div>
    </div>
  )
}
