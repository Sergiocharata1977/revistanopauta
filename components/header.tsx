'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { seccionesNav, siteConfig } from '@/lib/site-config'
import { Masthead } from '@/components/revista/masthead'

type HeaderProps = {
  /** La portada usa el logotipo grande; el resto de las paginas, el chico. */
  variante?: 'tapa' | 'interior'
}

export function Header({ variante = 'interior' }: HeaderProps) {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [scrolleado, setScrolleado] = useState(false)
  const pathname = usePathname()

  // El logotipo compacto solo aparece en la barra fija una vez que el
  // masthead grande salio de pantalla.
  useEffect(() => {
    const alScrollear = () => setScrolleado(window.scrollY > 140)
    alScrollear()
    window.addEventListener('scroll', alScrollear, { passive: true })
    return () => window.removeEventListener('scroll', alScrollear)
  }, [])

  useEffect(() => {
    setMenuAbierto(false)
  }, [pathname])

  const esSeccionActiva = (slug: string) => pathname === `/secciones/${slug}`

  return (
    <header>
      <Masthead tamano={variante} />

      {/* Barra de secciones: se fija arriba al desplazarse. */}
      <div className="sticky top-0 z-50 border-b border-filete bg-papel/97 backdrop-blur supports-[backdrop-filter]:bg-papel/90">
        <div className="mx-auto flex max-w-[1280px] items-center gap-3 px-4 sm:px-6">
          {/* Marca compacta, revelada al scrollear. */}
          <Link
            href="/"
            aria-hidden={!scrolleado}
            tabIndex={scrolleado ? 0 : -1}
            className={cn(
              'shrink-0 font-display text-sm font-black uppercase leading-none tracking-tight text-tinta transition-all duration-200',
              scrolleado
                ? 'max-w-[140px] opacity-100'
                : 'pointer-events-none max-w-0 overflow-hidden opacity-0'
            )}
          >
            {siteConfig.tipo} <span className="text-rojo">{siteConfig.marca}</span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center lg:flex">
            {seccionesNav.map((s) => (
              <Link
                key={s.slug}
                href={`/secciones/${s.slug}`}
                className={cn(
                  'border-b-2 px-3.5 py-3 text-[11px] font-bold uppercase tracking-[0.13em] transition-colors',
                  esSeccionActiva(s.slug)
                    ? 'border-rojo text-rojo'
                    : 'border-transparent text-tinta-2 hover:border-tinta hover:text-tinta'
                )}
              >
                {s.nombre}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1.5 lg:ml-0">
            <Link
              href="/noticias"
              aria-label="Buscar en el archivo"
              className="grid h-8 w-8 place-items-center text-tinta-2 transition-colors hover:text-rojo"
            >
              <Search className="h-4 w-4" />
            </Link>
            <Link
              href="/login"
              className="hidden border border-filete px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-tinta-2 transition-colors hover:border-tinta hover:text-tinta sm:inline-block"
            >
              Redaccion
            </Link>

            <button
              type="button"
              onClick={() => setMenuAbierto(!menuAbierto)}
              aria-label="Abrir menu de secciones"
              aria-expanded={menuAbierto}
              className="grid h-8 w-8 place-items-center text-tinta lg:hidden"
            >
              {menuAbierto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuAbierto && (
          <div className="border-t border-filete bg-papel lg:hidden">
            <nav className="mx-auto grid max-w-[1280px] grid-cols-2 gap-px bg-filete px-0 sm:grid-cols-3">
              {seccionesNav.map((s) => (
                <Link
                  key={s.slug}
                  href={`/secciones/${s.slug}`}
                  className={cn(
                    'bg-papel px-4 py-3 text-[11px] font-bold uppercase tracking-[0.13em]',
                    esSeccionActiva(s.slug) ? 'text-rojo' : 'text-tinta-2'
                  )}
                >
                  {s.nombre}
                </Link>
              ))}
              <Link
                href="/noticias"
                className="bg-papel px-4 py-3 text-[11px] font-bold uppercase tracking-[0.13em] text-tinta-2"
              >
                Archivo
              </Link>
              <Link
                href="/login"
                className="bg-papel px-4 py-3 text-[11px] font-bold uppercase tracking-[0.13em] text-tinta-2"
              >
                Redaccion
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
