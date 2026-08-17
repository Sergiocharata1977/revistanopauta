import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Portada } from '@/components/revista/portada'
import { getNotasPublicadas } from '@/lib/server/notas'
import { armarPortada } from '@/lib/portada'

// La tapa se regenera como maximo una vez por minuto.
export const revalidate = 60

/**
 * Portada de Revista No Pauta.
 *
 * Las notas se buscan aca, en el servidor, y bajan armadas al componente.
 * La jerarquia de la tapa la resuelve lib/portada.ts.
 */
export default async function PortadaPage() {
  const notas = await getNotasPublicadas()
  const portada = armarPortada(notas)

  return (
    <div className="min-h-screen bg-papel">
      <Header variante="tapa" />
      <Portada portada={portada} />
      <Footer />
    </div>
  )
}
