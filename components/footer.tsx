import Link from 'next/link'

import { secciones, siteConfig } from '@/lib/site-config'

const institucional = [
  ['Quienes somos', '/institucional/quienes-somos'],
  ['Linea editorial', '/institucional/linea-editorial'],
  ['Staff y redaccion', '/institucional/staff'],
  ['Contacto', '/institucional/contacto'],
]

const legales = [
  ['Terminos de uso', '/institucional/terminos'],
  ['Politica de privacidad', '/institucional/privacidad'],
  ['Politica de correcciones', '/institucional/correcciones'],
  ['Acceso a la redaccion', '/login'],
]

export function Footer() {
  return (
    <footer className="mt-16 border-t-[3px] border-filete-fuerte bg-tinta text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr]">
          {/* Bloque de marca */}
          <div>
            <p className="font-display text-3xl font-black uppercase leading-none">
              {siteConfig.tipo} <span className="text-rojo">{siteConfig.marca}</span>
            </p>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">
              {siteConfig.lema}
            </p>
            <p className="mt-5 max-w-xs font-serif text-sm leading-relaxed text-white/70">
              Periodismo independiente con base en {siteConfig.ciudad}. Publicamos lo que podemos
              verificar y corregimos a la vista lo que publicamos mal.
            </p>
            <p className="mt-5 text-xs text-white/50">{siteConfig.email}</p>
          </div>

          <div>
            <h4 className="border-b border-white/15 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
              Secciones
            </h4>
            <div className="mt-4 grid gap-2.5">
              {secciones.map((s) => (
                <Link
                  key={s.slug}
                  href={`/secciones/${s.slug}`}
                  className="text-sm text-white/75 transition-colors hover:text-rojo"
                >
                  {s.nombre}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="border-b border-white/15 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
              El diario
            </h4>
            <div className="mt-4 grid gap-2.5">
              {institucional.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-white/75 transition-colors hover:text-rojo"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/noticias"
                className="text-sm text-white/75 transition-colors hover:text-rojo"
              >
                Archivo completo
              </Link>
            </div>
          </div>

          <div>
            <h4 className="border-b border-white/15 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
              Legales
            </h4>
            <div className="mt-4 grid gap-2.5">
              {legales.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-white/75 transition-colors hover:text-rojo"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-4 py-5 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.nombreCompleto}. Todos los derechos
            reservados.
          </p>
          <p>Prohibida su reproduccion total o parcial sin cita de la fuente.</p>
        </div>
      </div>
    </footer>
  )
}
