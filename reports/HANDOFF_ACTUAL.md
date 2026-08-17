# Handoff actual - Revista No Pauta

> El proyecto se llamaba `Cr. Jorge Ricardo Bade` y antes `dra.casasola`. Las
> entradas anteriores a 2026-08-17 son de esas etapas y se conservan solo como
> historia: no describen la revista.

## Actualizacion 2026-08-17 - Firebase propio y arreglo de la conexion

Estado: la revista quedo apuntando a su propio proyecto Firebase
`revistanopauta`. Antes usaba `dra-casasola-web`, heredado.

Que se encontro al controlar la migracion:

- **La apiKey estaba mal transcrita.** Se habia copiado una `B` como `8`
  (`...S7B8EJq...` en vez de `...S7BBEJq...`). Google respondia
  `API_KEY_INVALID` a todo lo que pasa por el SDK cliente: login, alta de
  usuarios y subida de fotos. Corregido en `lib/firebase-config.ts`, verificado
  contra `firebase apps:sdkconfig WEB --project revistanopauta`.

- **Habia dos configuraciones de Firebase conviviendo.** `lib/firebase-config.ts`
  apuntaba a `revistanopauta` y `lib/firebase/config.ts` tenia otra copia
  hardcodeada a `dra-casasola-web`, sin leer variables de entorno, por eso la
  migracion no la alcanzo. Las dos llamaban a `initializeApp` protegido por
  `getApps().length === 0`: ganaba la que cargara primero y la otra se colgaba
  en silencio del proyecto ajeno. El resultado era que la portada leia las notas
  de `revistanopauta` mientras login, `/setup` y `AuthContext` autenticaban
  contra `dra-casasola-web`. Ahora `lib/firebase/config.ts` reexporta
  `lib/firebase.ts`, que es la unica fuente de verdad.

- **El proyecto de Vercel no estaba conectado al repo.** Todos los deploys
  previos fueron manuales con la CLI; `commit + push` no disparaba nada. Se
  conecto con `vercel git connect` a `Sergiocharata1977/revistanopauta`, asi que
  ahora cada push a `main` deploya solo. Ojo: `Redeploy` en la UI reconstruye el
  mismo commit, no trae los nuevos.

Lo que quedo verificado funcionando:

- Reglas de Firestore desplegadas: `news` lee publico (200), `users` y `tasks`
  bloqueados (403).
- Reglas de Storage desplegadas: `news/` accesible, resto cerrado.
- App web registrada en Firebase con `appId`, `messagingSenderId`, bucket y
  `authDomain` correctos.
- Sitio en produccion HTTP 200, renderizando server-side.
- El proyecto Vercel no tiene variables de entorno cargadas. Funciona con los
  valores por defecto de `lib/firebase-config.ts`, que no son secretos.

Cerrado en la misma sesion:

- **Primeros administradores creados.** Se dieron de alta dos usuarios desde
  `/setup`, ya con los arreglos en produccion, asi que quedaron en el proyecto
  correcto. Con eso nacio la coleccion `users`. Nota para el futuro: se llama
  `users` en ingles, no `usuarios`, y Firestore no guarda colecciones vacias, se
  crean solas con el primer documento. Lo mismo va a pasar con `news` al
  publicar la primera nota.

- **`/setup` cerrado.** Creaba una cuenta con `role: admin` sin pedir ninguna
  credencial previa, y estaba publicada en internet: cualquiera que adivinara la
  URL se hacia administrador de la revista. Ahora responde 404 salvo que
  `SETUP_HABILITADO` valga `1` en las variables de entorno de Vercel. Se cerro en
  vez de borrarse porque al estrenar un proyecto Firebase no hay otra forma de
  crear el primer usuario; la secuencia sana es habilitar, crear y volver a
  deshabilitar. La variable no lleva prefijo `NEXT_PUBLIC` a proposito, asi vive
  solo en el servidor. Las altas siguientes van por `/admin/users`, que exige
  sesion.

## Pendientes de esta etapa

- **Borrar `scripts/init-firebase.ts` y `scripts/create-auth-users.ts`.**
  Apuntan a un tercer proyecto, `lla-landding`, con la key hardcodeada, y
  siembran noticias politicas y usuarios con contrasenas en texto plano. Nada
  los importa. Van junto con `Logos-lla/` y `milei-sudoeste-chaco.zip`, que
  tambien sobran en la raiz.
- Revisar la regla de `users` en `firestore.rules`: hoy cualquier usuario
  autenticado puede leer y escribir el perfil de cualquier otro.

## Actualizacion 2026-07-15 - Correccion sistema de usuarios

- Diagnostico: `/admin/users` no funcionaba como sistema real de acceso. Creaba/mostraba documentos en `users`, pero no creaba credenciales en Firebase Auth; ademas las reglas Firestore impedían listar/crear perfiles de otros usuarios si estaban desplegadas.
- `app/admin/users/page.tsx`: se agrego campo de contrasena inicial, errores visibles y sincronizacion automatica del perfil del admin logueado.
- `lib/services.ts`: `UsersService.create` ahora crea primero la cuenta en Firebase Authentication via Identity Toolkit REST y luego guarda el perfil en `users/{uid}`.
- `app/setup/page.tsx`: el alta inicial ahora tambien crea el perfil Firestore del administrador y actualiza el placeholder al dominio del contador.
- `firestore.rules`: se habilito gestion de perfiles `users` para usuarios autenticados del panel. Reglas desplegadas con `firebase deploy --only firestore:rules --project dra-casasola-web` OK.
- Validacion: `git diff --check` OK, solo warnings CRLF. Deploy Vercel produccion OK, build remoto compilo y aliaso `https://cr-jorge-bade.vercel.app`.

## Actualizacion 2026-07-15 - Boton login en header publico

- Se agrego acceso visible `Login` en `components/header.tsx`, apuntando a `/login`.
- En desktop aparece como boton secundario junto a `Solicitar Consulta`; en mobile aparece dentro del menu desplegable.
- Validacion liviana: `git diff --check` OK. Deploy manual requerido en Vercel porque el auto deploy no siempre toma los pushes en este proyecto.

## Actualizacion 2026-07-15 - Sistema de logo recuperado

- Se incorporo un componente reutilizable `components/brand-logo.tsx` para centralizar la marca del estudio.
- El logo combina isotipo `JB`, nombre completo `Cr. Jorge Ricardo Bade` y descriptor `Estudio contable`, con variantes compacta e inversa.
- Se reemplazaron textos/identidad suelta en `components/header.tsx`, `components/footer.tsx`, `app/login/page.tsx` y `app/admin/layout.tsx`.
- Se actualizo `public/icon.svg` y la metadata de `app/layout.tsx` para que el favicon use la nueva marca SVG en lugar del icono generico previo.
- Validacion liviana: `git diff --check` OK, solo warnings CRLF. No se corrio build/type-check porque el clon en D no tiene `node_modules` y el handoff indica no instalar dependencias ni correr Node pesado salvo pedido explicito.

## Actualizacion 2026-07-11 - Diseno Stitch aplicado

- Se aplico el rediseño visual estilo Stitch indicado por el usuario sobre la home publica.
- Identidad visual: azul marino profundo, fondos blancos/grises claros y acentos verde esmeralda.
- `components/header.tsx`: header compacto similar al mockup, navegacion corta y CTA `Solicitar Consulta`.
- `app/page.tsx`: hero modernizado con escena financiera visual, bloque de informacion ordenada, secciones de servicios en cards, empresas/emprendedores, personas, FAQ tipo acordeon y contacto.
- `app/page.tsx`: se agrego mapa embebido de Google Maps para `Chacabuco 56, Charata, Chaco, Argentina`.
- `components/footer.tsx`: footer oscuro reorganizado con marca, secciones y legal.
- Control simple: `git diff --check` OK; `rg` sin marcas viejas visibles en `app`/`components` principales. No se corrio build/type-check local por regla de no instalar dependencias en disco D.
- Deploy manual posterior con Vercel CLI porque el deploy automatico no habia tomado el commit `be39e08`. Produccion actual: `https://cr-jorge-bade.vercel.app`, deployment `dpl_FqFGJcyERNUXT7mdX9uUneAdmrPu`, status Ready. Verificacion HTTP 200 con texto `tomar mejores decisiones`.

## Actualizacion 2026-07-11 - Web contable y nuevo proyecto Vercel

- Se adapto la web publica desde la identidad historica `dra.casasola` hacia `Cr. Jorge Ricardo Bade - Contador Publico`.
- Home reemplazada por landing contable blanca/minimalista con menu: Inicio, El Estudio, Servicios, Empresas y Emprendedores, Personas, Preguntas Frecuentes y Contacto.
- Contenido principal incorporado: hero, presentacion del estudio, asesoramiento impositivo, contabilidad/estados contables, sueldos/gestion laboral, segmentos atendidos, FAQ y CTA de consulta.
- Rutas publicas heredadas `/noticias`, `/noticias/[id]`, `/eventos` y `/eventos/[id]` redirigen a secciones de la nueva landing para no exponer contenido juridico viejo.
- Branding actualizado en metadata, header, footer, WhatsApp, login, sidebar admin y organizador por defecto de eventos.
- Vercel anterior eliminado por el usuario. Se creo proyecto Vercel nuevo: `cr-jorge-bade` en scope `sergiocharata1977s-projects`.
- Link local creado con Vercel CLI: `.vercel/project.json` apunta a `projectName: cr-jorge-bade`, `projectId: prj_gDhzosYvOuUk6f1odWWiQg8z9ZTI`, `orgId: team_1Qiu4kWoC2qA9SP4mKibkWAB`. `.vercel` esta ignorado por Git.
- Deploy produccion OK con Vercel CLI: `https://cr-jorge-bade.vercel.app` (`dpl_553Z4pAXcuZG9QToR9JM9dFYSJEC`, status Ready).
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
