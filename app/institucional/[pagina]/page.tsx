import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getPaginaInstitucional, paginasInstitucionales } from '@/lib/institucional'
import { siteConfig } from '@/lib/site-config'

type Props = { params: Promise<{ pagina: string }> }

export function generateStaticParams() {
  return paginasInstitucionales.map((p) => ({ pagina: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pagina } = await params
  const info = getPaginaInstitucional(pagina)
  if (!info) return { title: 'Pagina no encontrada' }

  return {
    title: info.titulo,
    description: info.bajada,
    openGraph: {
      title: `${info.titulo} | ${siteConfig.nombreCompleto}`,
      description: info.bajada,
      type: 'article',
    },
  }
}

export default async function InstitucionalPage({ params }: Props) {
  const { pagina } = await params
  const info = getPaginaInstitucional(pagina)
  if (!info) notFound()

  return (
    <div className="min-h-screen bg-papel">
      <Header />

      <article className="mx-auto max-w-[720px] px-4 py-12 sm:px-6">
        <header className="filete-seccion pt-4">
          <p className="volanta">{info.volanta}</p>
          <h1 className="titular mt-3 text-[2.1rem] leading-[1.05] sm:text-[2.6rem]">
            {info.titulo}
          </h1>
          <p className="mt-4 border-b border-filete pb-5 font-serif text-lg leading-relaxed text-tinta-2">
            {info.bajada}
          </p>
        </header>

        <div className="cuerpo-nota mt-7">
          {info.cuerpo.map((bloque, i) =>
            bloque.startsWith('## ') ? (
              <h2
                key={i}
                className="titular mb-2 mt-8 text-xl first:mt-0"
              >
                {bloque.slice(3)}
              </h2>
            ) : (
              <p key={i}>{bloque}</p>
            )
          )}
        </div>
      </article>

      <Footer />
    </div>
  )
}
