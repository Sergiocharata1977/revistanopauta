import Link from 'next/link'

import { type Portada as PortadaData } from '@/lib/portada'
import { secciones } from '@/lib/site-config'
import {
  NotaApertura,
  NotaBreve,
  NotaDestacada,
  NotaOpinion,
  NotaTitular,
  TituloBloque,
} from '@/components/revista/nota-card'

/**
 * Tapa de la revista.
 *
 * Es un componente de servidor puro: recibe la portada ya armada y solo la
 * dibuja. Al no pedir datos desde el navegador, el HTML sale completo y las
 * notas quedan visibles para buscadores y redes sociales.
 */
export function Portada({ portada }: { portada: PortadaData }) {
  const { apertura, breves, opinion, destacadas, ultimas, esDemo } = portada

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6">
      {esDemo && <AvisoDemo />}

      {/* ---- Cuerpo principal de la tapa: tres columnas ---- */}
      <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)_270px] lg:gap-10">
        {/* Columna izquierda: breves */}
        <aside className="order-2 lg:order-1">
          <TituloBloque>Apuntes</TituloBloque>
          <div className="grid gap-4">
            {breves.map((nota) => (
              <NotaBreve key={nota.id} nota={nota} />
            ))}
          </div>

          <div className="mt-8">
            <TituloBloque>Secciones</TituloBloque>
            <div className="grid gap-px bg-filete">
              {secciones.map((s) => (
                <Link
                  key={s.slug}
                  href={`/secciones/${s.slug}`}
                  className="bg-papel py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-tinta-2 transition-colors hover:text-rojo"
                >
                  {s.nombre}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Columna central: la apertura */}
        <main className="order-1 lg:order-2 lg:border-l lg:border-filete lg:px-7">
          {apertura ? (
            <NotaApertura nota={apertura} />
          ) : (
            <p className="cuerpo-nota">Todavia no hay notas publicadas.</p>
          )}
        </main>

        {/* Columna derecha: opinion */}
        <aside className="order-3 lg:border-l lg:border-filete lg:pl-7">
          <TituloBloque href="/secciones/opinion">Voz Libre</TituloBloque>
          <div className="grid gap-4">
            {opinion.length > 0 ? (
              opinion.map((nota) => <NotaOpinion key={nota.id} nota={nota} />)
            ) : (
              <p className="font-serif text-sm text-tinta-3">
                Sin columnas publicadas esta semana.
              </p>
            )}
          </div>

          <div className="mt-8 border border-filete bg-papel-2 p-5">
            <p className="volanta">Sumate</p>
            <p className="titular mt-2 text-lg leading-tight">
              El periodismo que no se puede comprar se sostiene entre todos
            </p>
            <p className="mt-2.5 font-serif text-[13px] leading-snug text-tinta-3">
              No Pauta no publica contenido pago sin identificar. Si te sirve lo que hacemos,
              acompanalo.
            </p>
            <Link
              href="/institucional/contacto"
              className="mt-4 inline-block bg-tinta px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-rojo"
            >
              Quiero colaborar
            </Link>
          </div>
        </aside>
      </div>

      {/* ---- Bloque de destacadas con foto ---- */}
      {destacadas.length > 0 && (
        <section className="mt-20">
          <TituloBloque href="/noticias">Lecturas</TituloBloque>
          <div className="grid gap-12 sm:grid-cols-2">
            {destacadas.map((nota) => (
              <NotaDestacada key={nota.id} nota={nota} />
            ))}
          </div>
        </section>
      )}

      {/* ---- Cierre de tapa: titulares sueltos ---- */}
      {ultimas.length > 0 && (
        <section className="mt-20">
          <TituloBloque href="/noticias">Lo ultimo</TituloBloque>
          <div className="grid gap-x-7 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {ultimas.map((nota) => (
              <NotaTitular key={nota.id} nota={nota} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */

function AvisoDemo() {
  return (
    <div className="mb-8 border-l-2 border-rojo bg-papel-2 px-4 py-3">
      <p className="volanta">Portada de demostracion</p>
      <p className="mt-1 font-serif text-sm text-tinta-2">
        Todavia no hay notas publicadas, asi que se muestra contenido de muestra. Publica la
        primera nota desde{' '}
        <Link href="/admin/news" className="border-b border-rojo text-rojo">
          el panel de redaccion
        </Link>{' '}
        y esta tapa se arma sola.
      </p>
    </div>
  )
}
