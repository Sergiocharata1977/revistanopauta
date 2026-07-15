'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import { BrandLogo } from '@/components/brand-logo'

const links = [
  ['Inicio', '/#inicio'],
  ['Servicios', '/#servicios'],
  ['Empresas', '/#empresas'],
  ['Individuos', '/#personas'],
  ['Preguntas', '/#preguntas-frecuentes'],
  ['Contacto', '/#contacto'],
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo compact className="max-w-[220px] sm:max-w-none" />

        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="border-b border-transparent py-1 text-xs font-medium text-slate-600 transition-colors hover:border-emerald-500 hover:text-slate-950"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contacto"
          className="hidden bg-slate-950 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-600 md:inline-flex"
        >
          Solicitar Consulta
        </Link>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-900 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/#contacto"
              className="mt-2 bg-slate-950 px-4 py-2 text-center text-xs font-semibold text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solicitar Consulta
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
