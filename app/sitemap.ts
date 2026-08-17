import type { MetadataRoute } from 'next'

import { getNotasPublicadas } from '@/lib/server/notas'
import { hrefNota } from '@/lib/portada'
import { paginasInstitucionales } from '@/lib/institucional'
import { secciones, siteConfig } from '@/lib/site-config'

export const revalidate = 3600

/**
 * Mapa del sitio.
 *
 * Es la lista que Google usa para descubrir que existe cada nota sin tener
 * que ir siguiendo enlaces. Se regenera solo cada hora.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url
  const ahora = new Date()

  const fijas: MetadataRoute.Sitemap = [
    { url: base, lastModified: ahora, changeFrequency: 'hourly', priority: 1 },
    { url: `${base}/noticias`, lastModified: ahora, changeFrequency: 'daily', priority: 0.8 },
  ]

  const porSeccion: MetadataRoute.Sitemap = secciones.map((s) => ({
    url: `${base}/secciones/${s.slug}`,
    lastModified: ahora,
    changeFrequency: 'daily',
    priority: 0.7,
  }))

  const institucionales: MetadataRoute.Sitemap = paginasInstitucionales.map((p) => ({
    url: `${base}/institucional/${p.slug}`,
    lastModified: ahora,
    changeFrequency: 'monthly',
    priority: 0.4,
  }))

  const notas = await getNotasPublicadas()
  const porNota: MetadataRoute.Sitemap = notas.map((n) => ({
    url: `${base}${hrefNota(n)}`,
    lastModified: new Date(n.updatedAt || n.publishedAt || n.createdAt),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  return [...fijas, ...porSeccion, ...institucionales, ...porNota]
}
