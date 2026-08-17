'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { NewsService } from '@/lib/services'
import { hrefNota, ordenarPorFecha } from '@/lib/portada'
import { urgentesDemo } from '@/lib/demo-content'
import type { News } from '@/lib/types'

type Titular = { texto: string; href?: string }

/**
 * Barra roja de ultimo momento.
 *
 * Toma las notas publicadas con `urgente: true`. Si no hay ninguna,
 * muestra titulares de muestra para que la barra no quede vacia.
 */
export function UltimoMomento() {
  const [titulares, setTitulares] = useState<Titular[]>(
    urgentesDemo.map((texto) => ({ texto }))
  )

  useEffect(() => {
    let vigente = true

    NewsService.getPublished()
      .then((notas: News[]) => {
        if (!vigente) return
        const urgentes = ordenarPorFecha(notas.filter((n) => n.urgente)).slice(0, 5)
        if (urgentes.length > 0) {
          setTitulares(urgentes.map((n) => ({ texto: n.title, href: hrefNota(n) })))
        }
      })
      .catch(() => {
        // Sin conexion a Firestore la barra conserva los titulares de muestra.
      })

    return () => {
      vigente = false
    }
  }, [])

  // La lista se duplica para que el desplazamiento continuo no muestre cortes.
  const cinta = [...titulares, ...titulares]

  return (
    <div className="border-b border-rojo-oscuro bg-rojo text-white">
      <div className="mx-auto flex max-w-[1280px] items-stretch">
        <span className="flex shrink-0 items-center gap-2 bg-rojo-oscuro px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="inline-block h-1.5 w-1.5 animate-pulse bg-white" aria-hidden="true" />
          Urgente
        </span>

        <div className="relative flex-1 overflow-hidden">
          <div className="marquesina flex w-max items-center py-1.5">
            {cinta.map((t, i) => (
              <span key={`${t.texto}-${i}`} className="flex items-center whitespace-nowrap">
                {t.href ? (
                  <Link
                    href={t.href}
                    className="px-4 text-[11px] font-medium tracking-wide hover:underline"
                  >
                    {t.texto}
                  </Link>
                ) : (
                  <span className="px-4 text-[11px] font-medium tracking-wide">{t.texto}</span>
                )}
                <span className="text-white/40" aria-hidden="true">
                  &bull;
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
