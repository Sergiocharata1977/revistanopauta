import Link from 'next/link'

import { BrandLogo } from '@/components/brand-logo'

export function Footer() {
  return (
    <footer className="bg-[#242b2d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_0.7fr_0.7fr] lg:px-8">
        <div>
          <BrandLogo inverse />
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
            Estudio contable orientado a empresas, comercios, emprendedores, profesionales y personas
            que necesitan informacion clara para cumplir y decidir mejor.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Secciones</h4>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            <Link href="/#inicio" className="hover:text-white">Inicio</Link>
            <Link href="/#servicios" className="hover:text-white">Servicios</Link>
            <Link href="/#empresas" className="hover:text-white">Empresas</Link>
            <Link href="/#personas" className="hover:text-white">Personas</Link>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Legal</h4>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            <Link href="/#preguntas-frecuentes" className="hover:text-white">Privacidad</Link>
            <Link href="/#preguntas-frecuentes" className="hover:text-white">Terminos</Link>
            <Link href="/#contacto" className="hover:text-white">Ubicacion</Link>
            <Link href="/login" className="hover:text-white">Acceso Admin</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-slate-400 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Cr. Jorge Ricardo Bade. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
