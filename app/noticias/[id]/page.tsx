import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { NotaDetalle } from '@/components/revista/nota-detalle'

type Props = { params: Promise<{ id: string }> }

/**
 * El parametro se llama `id` por compatibilidad con los enlaces viejos,
 * pero acepta tanto el slug editorial como el id de Firestore.
 */
export default async function NotaPage({ params }: Props) {
  const { id } = await params

  return (
    <div className="min-h-screen bg-papel">
      <Header />
      <NotaDetalle identificador={id} />
      <Footer />
    </div>
  )
}
