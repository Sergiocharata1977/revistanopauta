'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'

const links = [
  ['Inicio', '/#inicio'],
  ['El Estudio', '/#el-estudio'],
  ['Servicios', '/#servicios'],
  ['Empresas y Emprendedores', '/#empresas'],
  ['Personas', '/#personas'],
  ['Preguntas Frecuentes', '/#preguntas-frecuentes'],
  ['Contacto', '/#contacto'],
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight text-primary sm:text-xl">
            Cr. Jorge Ricardo Bade
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-5">
              {links.slice(0, -1).map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-medium text-foreground transition-colors hover:text-gray-500"
                >
                  {label}
                </Link>
              ))}
              <Button asChild className="rounded-full bg-gray-950 text-white hover:bg-gray-800">
                <Link href="/#contacto">Solicitar una consulta</Link>
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-medium text-foreground transition-colors hover:text-gray-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Button asChild className="w-full rounded-full bg-gray-950 text-white hover:bg-gray-800">
                <Link href="/#contacto" onClick={() => setMobileMenuOpen(false)}>
                  Solicitar una consulta
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
