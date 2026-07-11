import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileText,
  Landmark,
  MapPin,
  MessageSquare,
  ReceiptText,
  UserRound,
} from 'lucide-react'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const serviceCards = [
  {
    icon: ReceiptText,
    title: 'Asesoramiento Impositivo',
    text: 'Analisis de la situacion fiscal de cada cliente y acompanamiento permanente para el correcto cumplimiento de sus obligaciones tributarias.',
    items: ['Inscripciones ARCA y organismos provinciales', 'Liquidaciones IVA, Ganancias y Bienes Personales', 'Regimenes de retencion y percepcion'],
  },
  {
    icon: FileText,
    title: 'Contabilidad y Estados Contables',
    text: 'Procesamos y organizamos la informacion contable de su empresa para cumplir con las disposiciones legales y proveer informacion util para la gestion.',
    items: ['Registracion contable y libros obligatorios', 'Analisis de cuentas y auditorias externas', 'Elaboracion de balances anuales y trimestrales'],
  },
  {
    icon: ClipboardList,
    title: 'Sueldos y Gestion Laboral',
    text: 'Brindamos asistencia en la liquidacion de haberes y el cumplimiento de las obligaciones laborales y previsionales.',
    items: ['Liquidacion mensual de sueldos y cargas sociales', 'Gestion de altas, bajas y modificaciones AFIP', 'Cargas sociales y aportes sindicales'],
  },
]

const businessCards = [
  ['Orden documental', 'Diseno de circuitos simples para respaldos, comprobantes y conciliaciones.'],
  ['Gestion tributaria', 'Encuadre, vencimientos, declaraciones y regularizaciones.'],
  ['Informes para decidir', 'Lectura de ingresos, costos, resultados y evolucion financiera.'],
  ['Crecimiento cuidado', 'Asesoramiento para nuevas sucursales, empleados y estructura.'],
]

const faqs = [
  ['Puedo consultar aunque todavia no tenga una empresa creada?', 'Si. El estudio puede orientar el encuadre inicial, las inscripciones correspondientes y las obligaciones que conviene prever antes de comenzar la actividad.'],
  ['Trabajan con monotributistas y responsables inscriptos?', 'Si. Acompanamos a pequenos contribuyentes, responsables inscriptos, profesionales independientes y empresas.'],
  ['La contabilidad sirve solo para presentar impuestos?', 'No. Una contabilidad ordenada tambien permite medir resultados, revisar costos, anticipar necesidades financieras y tomar mejores decisiones.'],
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-600">{children}</p>
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Header />

      <main>
        <section id="inicio" className="overflow-hidden bg-gradient-to-br from-white via-slate-50 to-emerald-50/70">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-600">
                <BadgeCheck className="h-3.5 w-3.5 text-emerald-600" />
                Estudio contable & asesoria
              </div>

              <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Soluciones contables, impositivas y financieras para{' '}
                <span className="text-emerald-600">tomar mejores decisiones</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
                En el Estudio Contable del Cr. Jorge Ricardo Bade acompanamos a empresas, comercios,
                profesionales, emprendedores y particulares en el cumplimiento de sus obligaciones
                fiscales, laborales y contables.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contacto"
                  className="inline-flex items-center justify-center bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                >
                  Solicitar una consulta
                </Link>
                <Link
                  href="#servicios"
                  className="inline-flex items-center justify-center border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-950"
                >
                  Conocer nuestros servicios
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-12 top-10 h-64 w-64 bg-emerald-200/40 blur-3xl" />
              <div className="relative overflow-hidden rounded-lg bg-white shadow-2xl shadow-slate-300/60 ring-1 ring-slate-200">
                <div className="aspect-[4/3] bg-[linear-gradient(135deg,#f8fafc_0%,#e2e8f0_45%,#cbd5e1_100%)] p-8">
                  <div className="ml-auto h-16 w-16 rounded-full bg-emerald-700/10" />
                  <div className="mt-8 grid h-52 grid-cols-[1.1fr_0.9fr] gap-5">
                    <div className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="h-3 w-20 rounded-full bg-slate-200" />
                      <div className="mt-8 flex h-28 items-end gap-3">
                        {[48, 76, 56, 90, 68].map((height) => (
                          <div key={height} className="w-full rounded-t-sm bg-emerald-500" style={{ height }} />
                        ))}
                      </div>
                    </div>
                    <div className="rounded-md bg-slate-900 p-4 text-white">
                      <BarChart3 className="h-7 w-7 text-emerald-400" />
                      <p className="mt-8 text-2xl font-semibold">+ orden</p>
                      <p className="mt-2 text-xs leading-5 text-slate-300">Informacion clara para gestionar su actividad.</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-5 right-5 w-[78%] max-w-sm rounded-md bg-white p-4 shadow-xl ring-1 ring-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-600 text-white">
                      <ReceiptText className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-950">Informacion ordenada</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Control simple de impuestos, vencimientos y gestion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="el-estudio" className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-slate-950">
              Mas que liquidar impuestos: acompanamos la gestion de su actividad
            </h2>
            <div className="space-y-5 text-sm leading-7 text-slate-600">
              <p>
                La contabilidad no debe ser solamente una obligacion formal. Tambien debe convertirse
                en una herramienta para conocer la situacion economica y financiera de una empresa,
                anticipar problemas y tomar decisiones con mayor seguridad.
              </p>
              <p>
                Nuestro objetivo es brindar un servicio contable cercano, profesional y adaptado a las
                necesidades de cada cliente, combinando experiencia, actualizacion permanente y
                herramientas tecnologicas.
              </p>
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Servicios destacados</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Acompanamiento contable, fiscal y laboral
              </h2>
              <div className="mx-auto mt-5 h-0.5 w-16 bg-emerald-600" />
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {serviceCards.map((service) => (
                <article key={service.title} className="border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="flex h-9 w-9 items-center justify-center bg-emerald-50 text-emerald-700">
                    <service.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">{service.text}</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contacto"
                    className="mt-8 inline-flex w-full items-center justify-center border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-800 transition-colors hover:border-emerald-600 hover:text-emerald-700"
                  >
                    Consultar servicio
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="empresas" className="bg-slate-100 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-950 text-white">
                <Building2 className="h-5 w-5" />
              </div>
              <h2 className="mt-8 text-3xl font-semibold tracking-tight text-slate-950">
                Empresas y emprendedores
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Acompanamos la administracion diaria, el cumplimiento fiscal y la lectura economica
                de su actividad para que cada decision tenga informacion confiable.
              </p>
              <div className="mt-8 grid gap-3 text-xs text-slate-700">
                <div className="border border-slate-200 bg-white px-4 py-3">PyMEs y comercios</div>
                <div className="border border-slate-200 bg-white px-4 py-3">Productores agropecuarios</div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {businessCards.map(([title, text]) => (
                <div key={title} className="border border-slate-200 bg-white p-6 shadow-sm">
                  <BriefcaseBusiness className="h-5 w-5 text-emerald-700" />
                  <h3 className="mt-5 font-semibold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="personas" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Personas</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Asesoramiento impositivo y patrimonial claro
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Tambien trabajamos con personas que necesitan ordenar su situacion fiscal, revisar
                obligaciones, preparar presentaciones o consultar decisiones patrimoniales.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                ['Monotributo', 'Alta, recategorizacion, facturacion y seguimiento de limites.', UserRound],
                ['Ganancias y Bienes Personales', 'Declaraciones juradas anuales, analisis patrimonial y deducciones.', Landmark],
                ['Regularizacion fiscal', 'Planes de pago, moratorias y respuestas a requerimientos.', BadgeCheck],
              ].map(([title, text, Icon]) => (
                <div key={title as string} className="border border-slate-200 bg-slate-50 p-8 text-center">
                  <Icon className="mx-auto h-6 w-6 text-emerald-700" />
                  <h3 className="mt-6 font-semibold text-slate-950">{title as string}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text as string}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="preguntas-frecuentes" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Preguntas frecuentes</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Consultas habituales antes de empezar
              </h2>
              <p className="mt-4 text-sm text-slate-600">
                Algunas respuestas iniciales para orientar el primer contacto con el estudio.
              </p>
            </div>
            <div className="mt-10 space-y-3">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group border border-slate-200 bg-white px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-slate-950">
                    {question}
                    <span className="text-slate-400 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-[#071225] py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Inicie una conversacion profesional hoy mismo
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                Para iniciar el asesoramiento, escriba al estudio indicando su actividad, consulta
                principal y datos de contacto. Responderemos para coordinar el siguiente paso.
              </p>

              <div className="mt-8 space-y-4 text-sm">
                <div className="flex gap-3">
                  <span className="flex h-9 w-9 items-center justify-center bg-emerald-600/20 text-emerald-300">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-slate-400">Ubicacion</p>
                    <p className="font-medium">Chacabuco 56, Charata, Chaco, Argentina</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex h-9 w-9 items-center justify-center bg-emerald-600/20 text-emerald-300">
                    <MessageSquare className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-slate-400">Email</p>
                    <p className="font-medium">contacto@jorgericardobade.com.ar</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex h-9 w-9 items-center justify-center bg-emerald-600/20 text-emerald-300">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-slate-400">Atencion rapida</p>
                    <p className="font-medium">+54 3731 532578 (WhatsApp)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="https://wa.me/543731532578?text=Hola%20Cr.%20Jorge%20Ricardo%2C%20quiero%20solicitar%20una%20consulta%20contable."
                  className="inline-flex items-center justify-center bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-100"
                >
                  Escribir por WhatsApp
                </Link>
                <Link
                  href="mailto:contacto@jorgericardobade.com.ar"
                  className="inline-flex items-center justify-center border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-slate-950"
                >
                  Enviar email
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900 shadow-2xl">
              <iframe
                title="Ubicacion del Estudio Contable Cr. Jorge Ricardo Bade"
                src="https://www.google.com/maps?q=Chacabuco%2056%2C%20Charata%2C%20Chaco%2C%20Argentina&output=embed"
                className="h-[360px] w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
