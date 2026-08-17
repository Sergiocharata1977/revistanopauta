'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import { NewsService } from '@/lib/services'
import { notasDemo } from '@/lib/demo-content'
import {
  esColumnaDeOpinion,
  fechaLarga,
  minutosDeLectura,
  ordenarPorFecha,
} from '@/lib/portada'
import { nombreSeccion, siteConfig } from '@/lib/site-config'
import type { News } from '@/lib/types'
import { FotoNota } from '@/components/revista/foto-nota'
import { NotaDestacada, TituloBloque } from '@/components/revista/nota-card'

type Estado =
  | { fase: 'cargando' }
  | { fase: 'no-encontrada' }
  | { fase: 'lista'; nota: News; relacionadas: News[] }

/**
 * Pagina de nota.
 *
 * Resuelve la nota tanto por slug editorial como por id de Firestore, para
 * que los enlaces viejos (que usaban el id) sigan funcionando.
 */
export function NotaDetalle({ identificador }: { identificador: string }) {
  const [estado, setEstado] = useState<Estado>({ fase: 'cargando' })

  useEffect(() => {
    let vigente = true

    const coincide = (n: News) => n.slug === identificador || n.id === identificador

    const resolver = async () => {
      let publicadas: News[] = []
      try {
        publicadas = (await NewsService.getPublished()).filter((n) => n.published !== false)
      } catch {
        publicadas = []
      }

      const fuente = publicadas.length > 0 ? publicadas : notasDemo
      const nota = fuente.find(coincide)

      if (!vigente) return

      if (!nota) {
        setEstado({ fase: 'no-encontrada' })
        return
      }

      // Relacionadas: misma seccion primero; si no alcanza, lo mas reciente.
      const resto = ordenarPorFecha(fuente.filter((n) => n.id !== nota.id))
      const mismaSeccion = resto.filter((n) => n.seccion === nota.seccion)
      const relacionadas = [...mismaSeccion, ...resto.filter((n) => n.seccion !== nota.seccion)]
        .slice(0, 2)

      setEstado({ fase: 'lista', nota, relacionadas })
    }

    void resolver()
    return () => {
      vigente = false
    }
  }, [identificador])

  if (estado.fase === 'cargando') {
    return (
      <div className="mx-auto max-w-[720px] animate-pulse px-4 py-12 sm:px-6" aria-busy="true">
        <div className="h-2.5 w-24 bg-papel-3" />
        <div className="mt-4 h-10 w-full bg-papel-3" />
        <div className="mt-2 h-10 w-4/5 bg-papel-3" />
        <div className="mt-8 aspect-[16/9] w-full bg-papel-3" />
        <div className="mt-8 grid gap-2.5">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-3.5 w-full bg-papel-3" />
          ))}
        </div>
        <span className="sr-only">Cargando la nota</span>
      </div>
    )
  }

  if (estado.fase === 'no-encontrada') {
    return (
      <div className="mx-auto max-w-[720px] px-4 py-24 text-center sm:px-6">
        <p className="volanta">Error 404</p>
        <h1 className="titular mt-3 text-4xl">Esta nota no existe o fue despublicada</h1>
        <p className="mt-4 font-serif text-tinta-3">
          Puede que el enlace este mal escrito o que la nota haya salido de circulacion.
        </p>
        <Link
          href="/noticias"
          className="mt-8 inline-flex items-center gap-2 border border-tinta px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-tinta transition-colors hover:bg-tinta hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Ir al archivo
        </Link>
      </div>
    )
  }

  const { nota, relacionadas } = estado
  const parrafos = (nota.content || '')
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)
  const esOpinion = esColumnaDeOpinion(nota)

  return (
    <article className="mx-auto max-w-[1000px] px-4 py-10 sm:px-6">
      {/* Rastro de navegacion */}
      <nav className="meta mb-6 flex items-center gap-2" aria-label="Ubicacion">
        <Link href="/" className="transition-colors hover:text-rojo">
          Portada
        </Link>
        <span aria-hidden="true">/</span>
        <Link
          href={`/secciones/${nota.seccion ?? 'politica'}`}
          className="transition-colors hover:text-rojo"
        >
          {nombreSeccion(nota.seccion)}
        </Link>
      </nav>

      <div className="mx-auto max-w-[720px]">
        <header className="filete-seccion pt-4">
          <p className="volanta">{nota.volanta || (esOpinion ? 'Opinion' : nombreSeccion(nota.seccion))}</p>

          <h1
            className={`titular mt-3 text-[2.1rem] leading-[1.05] sm:text-[2.8rem] ${
              esOpinion ? 'italic' : ''
            }`}
          >
            {nota.title}
          </h1>

          {(nota.bajada || nota.summary) && (
            <p className="mt-4 font-serif text-lg leading-relaxed text-tinta-2">
              {nota.bajada || nota.summary}
            </p>
          )}

          <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-y border-filete py-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-tinta">
              Por {nota.author}
            </span>
            {nota.autorCargo && <span className="meta">{nota.autorCargo}</span>}
            <span className="meta ml-auto">
              {fechaLarga(nota.publishedAt || nota.createdAt)} &middot; {minutosDeLectura(nota)} min
              de lectura
            </span>
          </div>
        </header>

        {esOpinion && (
          <p className="mt-5 border-l-2 border-rojo bg-papel-2 px-4 py-2.5 font-serif text-[13px] italic text-tinta-3">
            Columna de opinion. Las ideas expresadas son responsabilidad de quien las firma y no
            representan necesariamente la posicion de {siteConfig.nombreCompleto}.
          </p>
        )}

        {nota.imageUrl || !esOpinion ? (
          <figure className="mt-7">
            <FotoNota
              src={nota.imageUrl}
              alt={nota.epigrafe || nota.title}
              seccion={nota.seccion}
              formato="tapa"
              priority
            />
            {(nota.epigrafe || nota.creditoFoto) && (
              <figcaption className="mt-2 border-b border-filete pb-3 font-serif text-xs italic leading-snug text-tinta-3">
                {nota.epigrafe}
                {nota.creditoFoto && (
                  <span className="not-italic"> &mdash; Foto: {nota.creditoFoto}</span>
                )}
              </figcaption>
            )}
          </figure>
        ) : null}

        <div className="cuerpo-nota con-capitular mt-8">
          {parrafos.length > 0 ? (
            parrafos.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p>{nota.summary}</p>
          )}
        </div>

        {nota.tags && nota.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-filete pt-5">
            {nota.tags.map((tag) => (
              <span
                key={tag}
                className="border border-filete px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-tinta-3"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-10 border border-filete bg-papel-2 p-5">
          <p className="volanta">Politica de correcciones</p>
          <p className="mt-2 font-serif text-sm leading-relaxed text-tinta-2">
            Si detectas un error en esta nota, escribinos a{' '}
            <a href={`mailto:${siteConfig.email}`} className="border-b border-rojo text-rojo">
              {siteConfig.email}
            </a>
            . Corregimos a la vista y dejamos constancia de la correccion.
          </p>
        </div>
      </div>

      {relacionadas.length > 0 && (
        <section className="mt-16">
          <TituloBloque href={`/secciones/${nota.seccion ?? 'politica'}`}>
            Seguir leyendo
          </TituloBloque>
          <div className="grid gap-8 sm:grid-cols-2">
            {relacionadas.map((n) => (
              <NotaDestacada key={n.id} nota={n} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
