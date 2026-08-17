import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Portada } from '@/components/revista/portada'

/**
 * Portada de Revista No Pauta.
 *
 * La jerarquia de la tapa la arma lib/portada.ts a partir de las notas
 * publicadas; esta pagina solo monta el armazon.
 */
export default function PortadaPage() {
  return (
    <div className="min-h-screen bg-papel">
      <Header variante="tapa" />
      <Portada />
      <Footer />
    </div>
  )
}
