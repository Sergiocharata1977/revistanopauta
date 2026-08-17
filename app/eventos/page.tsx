import { redirect } from 'next/navigation'

// Ruta heredada del sitio anterior. Se conserva para no romper enlaces viejos.
export default function EventosPage() {
  redirect('/noticias')
}
