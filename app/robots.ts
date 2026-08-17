import type { MetadataRoute } from 'next'

import { siteConfig } from '@/lib/site-config'

/**
 * Reglas para los buscadores.
 *
 * Todo el sitio publico es indexable; el panel de redaccion y el alta inicial
 * quedan fuera para que no aparezcan en resultados de busqueda.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/', '/login', '/setup'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
