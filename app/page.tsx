import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  HelpCircle,
  Landmark,
  ReceiptText,
  Users,
} from 'lucide-react'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'

const audiences = [
  'Empresas y PyMEs',
  'Comercios',
  'Productores agropecuarios',
  'Profesionales independientes',
  'Emprendedores',
  'Monotributistas',
  'Responsables inscriptos',
  'Asociaciones y entidades sin fines de lucro',
  'Personas que necesiten asesoramiento impositivo o patrimonial',
]

const taxServices = [
  'Inscripcion ante ARCA y organismos provinciales',
  'Monotributo y regimen general',
  'IVA, Ganancias y Bienes Personales',
  'Ingresos Brutos y Convenio Multilateral',
  'Regimenes de retencion y percepcion',
  'Declaraciones juradas y planes de pago',
  'Regularizacion de deudas fiscales',
  'Requerimientos, intimaciones e inspecciones',
]

const accountingServices = [
  'Registracion contable',
  'Conciliaciones bancarias',
  'Analisis de cuentas',
  'Preparacion de balances',
  'Estados contables',
  'Informes economicos y financieros',
  'Certificaciones contables',
  'Presentaciones ante organismos, bancos y terceros',
]

const payrollServices = [
  'Alta y baja de empleados',
  'Liquidacion mensual de sueldos',
  'Recibos de haberes',
  'Vacaciones y Sueldo Anual Complementario',
  'Horas extras, adicionales y liquidaciones finales',
  'Cargas sociales y presentaciones laborales',
  'Libro de sueldos y certificaciones de servicios',
  'Convenios colectivos, requerimientos y vencimientos',
]

const faqs = [
  {
    question: 'Puedo consultar aunque todavia no tenga una empresa creada?',
    answer:
      'Si. El estudio puede orientar el encuadre inicial, la inscripcion correspondiente y las obligaciones que conviene prever antes de comenzar la actividad.',
  },
  {
    question: 'Trabajan con monotributistas y responsables inscriptos?',
    answer:
      'Si. Se acompana tanto a pequenos contribuyentes como a contribuyentes del regimen general, empresas y profesionales independientes.',
  },
  {
    question: 'La contabilidad sirve solo para presentar impuestos?',
    answer:
      'No. Una contabilidad ordenada tambien permite medir resultados, revisar costos, anticipar necesidades financieras y tomar mejores decisiones.',
  },
]

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-gray-600">{description}</p>
    </div>
  )
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-gray-900" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-950">
      <Header />

      <main>
        <section id="inicio" className="border-b border-gray-100 bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Cr. Jorge Ricardo Bade - Contador Publico
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                Soluciones contables, impositivas y financieras para tomar mejores decisiones
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                En el Estudio Contable del Cr. Jorge Ricardo acompanamos a empresas, comercios,
                profesionales, emprendedores y particulares en el cumplimiento de sus obligaciones
                fiscales, laborales y contables.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
                Trabajamos con responsabilidad, atencion personalizada y una vision integral del
                negocio, para que cada cliente pueda contar con informacion clara, ordenada y
                confiable.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-gray-950 px-6 text-white hover:bg-gray-800">
                  <Link href="#contacto">
                    Solicitar una consulta <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                  <Link href="#servicios">Conocer nuestros servicios</Link>
                </Button>
              </div>
            </div>

            <div className="relative flex items-center lg:justify-end">
              <div className="w-full max-w-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                  <div>
                    <p className="text-sm text-gray-500">Panel de gestion</p>
                    <p className="mt-1 text-xl font-semibold text-gray-950">Informacion ordenada</p>
                  </div>
                  <Calculator className="h-9 w-9 text-gray-900" />
                </div>
                <div className="mt-6 grid gap-4">
                  {[
                    ['Impuestos', 'Vencimientos, declaraciones y encuadres'],
                    ['Contabilidad', 'Balances, informes y conciliaciones'],
                    ['Sueldos', 'Haberes, cargas sociales y documentacion'],
                    ['Gestion', 'Datos confiables para decidir con tiempo'],
                  ].map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[120px_1fr] gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <p className="text-sm font-medium text-gray-950">{label}</p>
                      <p className="text-sm leading-6 text-gray-600">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="el-estudio" className="bg-gray-50 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">El estudio</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
                Mas que liquidar impuestos: acompanamos la gestion de su actividad
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-gray-600">
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

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Atendemos a</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {audiences.map((audience) => (
                <div key={audience} className="flex items-center gap-3 border border-gray-200 bg-white p-4">
                  <Users className="h-4 w-4 flex-none text-gray-900" />
                  <span className="text-sm text-gray-700">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Servicios destacados"
              title="Acompanamiento contable, fiscal y laboral"
              description="Cada servicio se organiza segun la realidad del cliente, con seguimiento de vencimientos, documentacion respaldatoria y criterio profesional."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              <article className="border border-gray-200 bg-white p-6 shadow-sm">
                <ReceiptText className="h-8 w-8 text-gray-950" />
                <h3 className="mt-5 text-xl font-semibold text-gray-950">Asesoramiento impositivo</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Analizamos la situacion fiscal de cada cliente y brindamos acompanamiento para el
                  correcto cumplimiento de sus obligaciones tributarias.
                </p>
                <Checklist items={taxServices} />
                <Button asChild className="mt-7 w-full bg-gray-950 text-white hover:bg-gray-800">
                  <Link href="#contacto">Consultar por asesoramiento impositivo</Link>
                </Button>
              </article>

              <article className="border border-gray-200 bg-white p-6 shadow-sm">
                <FileText className="h-8 w-8 text-gray-950" />
                <h3 className="mt-5 text-xl font-semibold text-gray-950">Contabilidad y estados contables</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Procesamos y organizamos la informacion contable de la empresa para cumplir con las
                  disposiciones legales y generar informacion util para la gestion.
                </p>
                <Checklist items={accountingServices} />
              </article>

              <article className="border border-gray-200 bg-white p-6 shadow-sm">
                <ClipboardCheck className="h-8 w-8 text-gray-950" />
                <h3 className="mt-5 text-xl font-semibold text-gray-950">Sueldos y gestion laboral</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Brindamos asistencia en la liquidacion de haberes y en el cumplimiento de las
                  obligaciones laborales y previsionales.
                </p>
                <Checklist items={payrollServices} />
              </article>
            </div>
          </div>
        </section>

        <section id="empresas" className="border-y border-gray-100 bg-gray-50 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <Building2 className="h-9 w-9 text-gray-950" />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-gray-950">
                Empresas y emprendedores
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Acompanamos la administracion diaria, el cumplimiento fiscal y la lectura economica
                de la actividad para que cada decision tenga informacion confiable.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Orden documental', 'Circuitos simples para respaldos, comprobantes y conciliaciones.'],
                ['Gestion tributaria', 'Encuadre, vencimientos, declaraciones y regularizaciones.'],
                ['Informes para decidir', 'Lectura de ingresos, costos, resultados y necesidades financieras.'],
                ['Crecimiento cuidado', 'Asesoramiento para nuevas actividades, empleados y estructuras.'],
              ].map(([title, text]) => (
                <div key={title} className="border border-gray-200 bg-white p-5">
                  <Briefcase className="h-5 w-5 text-gray-900" />
                  <h3 className="mt-4 font-semibold text-gray-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="personas" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Personas"
              title="Asesoramiento impositivo y patrimonial claro"
              description="Tambien trabajamos con personas que necesitan ordenar su situacion fiscal, revisar obligaciones, preparar presentaciones o consultar decisiones patrimoniales."
            />
            <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
              <div className="border border-gray-200 bg-white p-6 text-center shadow-sm">
                <Users className="mx-auto h-7 w-7 text-gray-950" />
                <p className="mt-4 text-sm font-semibold text-gray-950">Monotributo</p>
              </div>
              <div className="border border-gray-200 bg-white p-6 text-center shadow-sm">
                <Landmark className="mx-auto h-7 w-7 text-gray-950" />
                <p className="mt-4 text-sm font-semibold text-gray-950">Ganancias y Bienes Personales</p>
              </div>
              <div className="border border-gray-200 bg-white p-6 text-center shadow-sm">
                <BadgeCheck className="mx-auto h-7 w-7 text-gray-950" />
                <p className="mt-4 text-sm font-semibold text-gray-950">Regularizacion fiscal</p>
              </div>
            </div>
          </div>
        </section>

        <section id="preguntas-frecuentes" className="bg-gray-50 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Preguntas frecuentes"
              title="Consultas habituales antes de empezar"
              description="Algunas respuestas iniciales para orientar el primer contacto con el estudio."
            />
            <div className="mt-12 divide-y divide-gray-200 border-y border-gray-200 bg-white">
              {faqs.map((faq) => (
                <div key={faq.question} className="grid gap-4 px-5 py-6 md:grid-cols-[260px_1fr]">
                  <h3 className="flex gap-3 text-base font-semibold text-gray-950">
                    <HelpCircle className="mt-0.5 h-5 w-5 flex-none" />
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 border border-gray-200 bg-gray-950 p-8 text-white sm:p-10 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">Contacto</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Solicitar una consulta
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300">
                  Para iniciar el asesoramiento, escriba al estudio indicando su actividad, consulta
                  principal y datos de contacto. Responderemos para coordinar el siguiente paso.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <Button asChild size="lg" className="rounded-full bg-white text-gray-950 hover:bg-gray-100">
                  <a href="https://wa.me/543731532578?text=Hola%20Cr.%20Jorge%20Ricardo%2C%20quiero%20solicitar%20una%20consulta%20contable.">
                    Escribir por WhatsApp <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white hover:text-gray-950">
                  <a href="mailto:contacto@jorgericardobade.com.ar">Enviar email</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
