# Handoff actual - Cr. Jorge Ricardo Bade

## Actualizacion 2026-07-11 - Web contable y nuevo proyecto Vercel

- Se adapto la web publica desde la identidad historica `dra.casasola` hacia `Cr. Jorge Ricardo Bade - Contador Publico`.
- Home reemplazada por landing contable blanca/minimalista con menu: Inicio, El Estudio, Servicios, Empresas y Emprendedores, Personas, Preguntas Frecuentes y Contacto.
- Contenido principal incorporado: hero, presentacion del estudio, asesoramiento impositivo, contabilidad/estados contables, sueldos/gestion laboral, segmentos atendidos, FAQ y CTA de consulta.
- Rutas publicas heredadas `/noticias`, `/noticias/[id]`, `/eventos` y `/eventos/[id]` redirigen a secciones de la nueva landing para no exponer contenido juridico viejo.
- Branding actualizado en metadata, header, footer, WhatsApp, login, sidebar admin y organizador por defecto de eventos.
- Vercel anterior eliminado por el usuario. Se creo proyecto Vercel nuevo: `cr-jorge-bade` en scope `sergiocharata1977s-projects`.
- Link local creado con Vercel CLI: `.vercel/project.json` apunta a `projectName: cr-jorge-bade`, `projectId: prj_gDhzosYvOuUk6f1odWWiQg8z9ZTI`, `orgId: team_1Qiu4kWoC2qA9SP4mKibkWAB`. `.vercel` esta ignorado por Git.
- Deploy produccion OK con Vercel CLI: `https://cr-jorge-bade.vercel.app` (`dpl_7D78z1d3P3tY6AjhUSn4cu1EJA31`, status Ready).
- Verificacion HTTP: `Invoke-WebRequest` devolvio 200 y el HTML contiene `Cr. Jorge Ricardo` + `Soluciones contables`.
- Validacion local liviana: `git diff --check` OK. No se instalo Node ni se corrio build/type-check local porque este clon en D no tiene `node_modules`; el build remoto de Vercel compilo correctamente.
- Nota logs: `vercel logs` en CLI 50.23.2 quedo en modo streaming y el intento con filtros fue rechazado por la CLI; no se detectaron errores en `vercel inspect`.

## Actualizacion 2026-07-11 - Renombre local desde Dra Casasola

- Proyecto local ubicado como carpeta hermana de Transparencia Chaco: `D:\Proyectos\Cr. Jorge Ricardo Bade`.
- Repo origen: `https://github.com/Sergiocharata1977/dra.casasola`.
- Nota de identidad: aunque el repo remoto conserva el nombre `dra.casasola`, el proyecto local queda identificado como `Cr. Jorge Ricardo Bade` por pedido del usuario.
- Workspace esperado junto a: `D:\Proyectos\transparencia-chaco-website`, `D:\Proyectos\platform-empresa` y `D:\Proyectos\finazas-landing`.
- Rama observada: `main`, sincronizada con `origin/main`.
- Ultimo commit observado: `847c6f1 Add correct address, phone and Google Maps - Address: Chacabuco 56, Charata, Chaco - Phone: +54 3731 532578 - Google Maps embed in contact section`.
- Se agrego `D:/Proyectos/Cr. Jorge Ricardo Bade` como `safe.directory` por la regla operativa del disco D.
- No se instalaron dependencias ni se corrio Node, dev server, build o type-check; solo validacion liviana con `git status` y `git log -1`.

## Contexto del proyecto

- Aplicacion Next.js con Firebase y UI React.
- El nombre operativo local ya no debe documentarse como Dra Casasola salvo para referenciar el repo remoto historico.
- No existe `CLAUDE.md` al momento de crear este handoff.

## Pendientes / Riesgos

- Revisar textos, marcas visibles y metadata si se necesita completar el cambio funcional de identidad desde Dra Casasola hacia Cr. Jorge Ricardo Bade.
- Mantener la excepcion operativa local en disco D: no instalar dependencias ni correr comandos Node pesados en esta maquina salvo pedido explicito.
