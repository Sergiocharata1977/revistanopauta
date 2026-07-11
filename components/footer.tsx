import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-950 py-16 text-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-2xl font-bold text-white">Cr. Jorge Ricardo Bade</h3>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-gray-400">
              Estudio contable orientado a empresas, comercios, emprendedores, profesionales y
              personas que necesitan informacion clara para cumplir y decidir mejor.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Servicios</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/#servicios" className="transition-colors hover:text-white">
                  Asesoramiento impositivo
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="transition-colors hover:text-white">
                  Contabilidad y estados contables
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="transition-colors hover:text-white">
                  Sueldos y gestion laboral
                </Link>
              </li>
              <li>
                <Link href="/#empresas" className="transition-colors hover:text-white">
                  Empresas y emprendedores
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>
                  Chacabuco 56
                  <br />
                  Charata, Chaco, Argentina
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+543731532578" className="transition-colors hover:text-white">
                  +54 3731 532578
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:contacto@jorgericardobade.com.ar" className="transition-colors hover:text-white">
                  contacto@jorgericardobade.com.ar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Cr. Jorge Ricardo Bade. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/#preguntas-frecuentes" className="transition-colors hover:text-white">
              Preguntas frecuentes
            </Link>
            <Link href="/login" className="transition-colors hover:text-white">
              Acceso Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
