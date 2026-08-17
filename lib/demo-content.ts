import type { News } from './types';

/**
 * Contenido de muestra para la portada.
 *
 * Solo se usa cuando la coleccion `news` de Firestore no devuelve notas
 * publicadas, para que el diseno de la revista sea visible desde el primer
 * arranque. En cuanto la redaccion publica su primera nota real, este
 * contenido deja de mostrarse automaticamente (ver lib/portada.ts).
 *
 * Los textos son genericos a proposito: no mencionan personas ni hechos
 * reales, para que nadie los confunda con periodismo publicado.
 */

const AHORA = '2026-08-17T09:00:00.000Z';

function nota(data: Partial<News> & Pick<News, 'id' | 'title' | 'author'>): News {
    return {
        content: '',
        published: true,
        publishedAt: AHORA,
        createdAt: AHORA,
        updatedAt: AHORA,
        jerarquia: 'normal',
        ...data,
    } as News;
}

export const notasDemo: News[] = [
    nota({
        id: 'demo-apertura',
        slug: 'independencia-periodistica-nuevo-escenario-politico',
        title: 'La independencia periodistica ante el nuevo escenario politico',
        volanta: 'Analisis / Medios',
        seccion: 'politica',
        jerarquia: 'apertura',
        ordenPortada: 1,
        author: 'Redaccion No Pauta',
        autorCargo: 'Mesa de edicion',
        tiempoLectura: 8,
        epigrafe: 'La sala de redaccion, el lugar donde todavia se decide que es noticia.',
        creditoFoto: 'Archivo No Pauta',
        bajada:
            'El ejercicio del periodismo enfrenta un escenario donde la velocidad de la informacion compite con la necesidad de verificarla. Que se pone en juego cuando el chequeo llega tarde.',
        summary:
            'El ejercicio del periodismo enfrenta un escenario donde la velocidad compite con la verificacion.',
        content: [
            'El ejercicio del periodismo enfrenta un escenario donde la velocidad de circulacion de la informacion compite, casi siempre con ventaja, contra el tiempo que exige verificarla. La consecuencia no es abstracta: una version incorrecta que circula seis horas ya modifico la conversacion publica antes de que llegue el desmentido.',
            'Las redacciones que sostienen estructuras de chequeo enfrentan una desventaja competitiva evidente en el corto plazo. Publican despues. Publican menos. El calculo, sin embargo, se invierte cuando se mide en credibilidad acumulada: el medio que corrige poco es el que termina siendo citado.',
            'La independencia editorial, en este contexto, dejo de ser una declaracion de principios para volverse una decision economica concreta. Sostenerla implica renunciar a ingresos, y esa renuncia debe estar prevista en el modelo de financiamiento o no se sostiene.',
            'La discusion sobre el financiamiento de los medios no puede separarse de la discusion sobre su linea editorial. Quien paga la redaccion define, aunque no lo explicite, que temas son investigables y cuales no. Hacer visible ese vinculo es parte del trabajo.',
            'Frente a eso, la transparencia sobre las fuentes de ingreso empieza a funcionar como un dato periodistico en si mismo. El lector que sabe quien financia lo que lee esta en mejores condiciones de evaluar lo que lee.',
        ].join('\n\n'),
    }),

    nota({
        id: 'demo-breve-1',
        slug: 'gabinete-crisis-fondos-publicos',
        title: 'Gabinete en crisis tras revelaciones sobre el uso de fondos publicos',
        volanta: 'Gestion',
        seccion: 'politica',
        jerarquia: 'breve',
        ordenPortada: 1,
        author: 'Redaccion No Pauta',
        summary:
            'Un informe de auditoria abrio una discusion interna sobre criterios de asignacion presupuestaria.',
        content:
            'Un informe de auditoria sobre la asignacion de partidas abrio una discusion interna respecto de los criterios utilizados. El documento no imputa responsabilidades individuales pero observa la ausencia de expedientes de respaldo en una porcion significativa de las erogaciones revisadas.',
    }),

    nota({
        id: 'demo-breve-2',
        slug: 'ley-medios-oposicion-transversal',
        title: 'La nueva ley de medios enfrenta una oposicion transversal',
        volanta: 'Legislativo',
        seccion: 'politica',
        jerarquia: 'breve',
        ordenPortada: 2,
        author: 'Redaccion No Pauta',
        summary:
            'El proyecto reune objeciones de bloques que rara vez coinciden, por motivos opuestos entre si.',
        content:
            'El proyecto reune objeciones de bloques que rara vez coinciden. Unos cuestionan el alcance de las facultades regulatorias; otros, exactamente lo contrario: que el texto deja fuera del encuadre a las plataformas digitales, hoy el principal canal de distribucion de noticias.',
    }),

    nota({
        id: 'demo-breve-3',
        slug: 'inflacion-cede-alimentos-siguen-subiendo',
        title: 'La inflacion cede, pero los precios de alimentos siguen al alza',
        volanta: 'Indices',
        seccion: 'economia',
        jerarquia: 'breve',
        ordenPortada: 3,
        author: 'Redaccion No Pauta',
        summary:
            'La desaceleracion del indice general convive con aumentos sostenidos en la canasta basica.',
        content:
            'La desaceleracion del indice general convive con aumentos sostenidos en la canasta basica. La brecha explica por que la mejora estadistica no se percibe en los hogares de menores ingresos, donde los alimentos concentran la mayor parte del gasto mensual.',
    }),

    nota({
        id: 'demo-breve-4',
        slug: 'banco-central-mantiene-tasa',
        title: 'El Banco Central mantiene la tasa de interes por tercer mes consecutivo',
        volanta: 'Politica monetaria',
        seccion: 'economia',
        jerarquia: 'breve',
        ordenPortada: 4,
        author: 'Redaccion No Pauta',
        summary: 'La decision busca sostener la demanda de instrumentos en moneda local.',
        content:
            'La decision busca sostener la demanda de instrumentos en moneda local en un contexto de expectativas todavia no ancladas. El costo es conocido: credito caro para las empresas que necesitan capital de trabajo.',
    }),

    nota({
        id: 'demo-destacada-1',
        slug: 'corte-suprema-fallo-privacidad-digital',
        title: 'La Corte Suprema dicta un fallo historico sobre privacidad digital',
        volanta: 'Justicia',
        seccion: 'judiciales',
        jerarquia: 'destacada',
        ordenPortada: 1,
        author: 'Redaccion No Pauta',
        tiempoLectura: 5,
        epigrafe: 'La sede del maximo tribunal.',
        creditoFoto: 'Archivo No Pauta',
        summary:
            'El maximo tribunal fijo un estandar sobre el acceso estatal a comunicaciones privadas.',
        content:
            'El maximo tribunal fijo un estandar sobre las condiciones en que el Estado puede acceder a comunicaciones privadas. El fallo establece que la sola invocacion de una investigacion en curso no alcanza como fundamento: se requiere una orden judicial que precise el alcance temporal y material de la medida.\n\nLa decision alcanza a causas en tramite y obliga a revisar procedimientos que hasta ahora se apoyaban en autorizaciones genericas.',
    }),

    nota({
        id: 'demo-destacada-2',
        slug: 'debate-urbano-gentrificacion-acceso-vivienda',
        title: 'El debate urbano: gentrificacion y acceso a la vivienda',
        volanta: 'Ciudades',
        seccion: 'sociedad',
        jerarquia: 'destacada',
        ordenPortada: 2,
        author: 'Redaccion No Pauta',
        tiempoLectura: 6,
        epigrafe: 'Obras en el casco urbano.',
        creditoFoto: 'Archivo No Pauta',
        summary:
            'La recuperacion de barrios centricos mejora la infraestructura y expulsa a quienes vivian ahi.',
        content:
            'La recuperacion de barrios centricos produce dos efectos simultaneos y de signo opuesto: mejora la infraestructura y desplaza a los hogares que ya no pueden pagar el alquiler resultante.\n\nLas herramientas para moderar ese desplazamiento existen y estan documentadas. La discusion pendiente no es tecnica sino politica: quien asume el costo de sostener poblacion de menores ingresos en zonas que se valorizan.',
    }),

    nota({
        id: 'demo-opinion-1',
        slug: 'silencio-complice-instituciones',
        title: 'El silencio complice de las instituciones',
        seccion: 'opinion',
        esOpinion: true,
        jerarquia: 'normal',
        ordenPortada: 1,
        author: 'Columna invitada',
        autorCargo: 'Analisis institucional',
        tiempoLectura: 4,
        summary:
            'Los organismos de control no fallan solo cuando actuan mal: tambien cuando eligen no actuar.',
        content:
            'Los organismos de control no fallan unicamente cuando actuan mal. Fallan, sobre todo, cuando eligen no actuar y esa inaccion no tiene costo alguno para quien la decide.',
    }),

    nota({
        id: 'demo-opinion-2',
        slug: 'economia-del-ajuste-permanente',
        title: 'La economia del ajuste permanente',
        seccion: 'opinion',
        esOpinion: true,
        jerarquia: 'normal',
        ordenPortada: 2,
        author: 'Columna invitada',
        autorCargo: 'Economia',
        tiempoLectura: 5,
        summary:
            'Cuando el ajuste deja de ser excepcion y se vuelve metodo, cambia lo que se puede planificar.',
        content:
            'Cuando el ajuste deja de presentarse como una excepcion transitoria y se instala como metodo de gestion, lo que se modifica no es solo el gasto: es el horizonte de planificacion de cualquier actor economico.',
    }),

    nota({
        id: 'demo-opinion-3',
        slug: 'hacia-donde-va-la-oposicion',
        title: 'Hacia donde va la oposicion',
        seccion: 'opinion',
        esOpinion: true,
        jerarquia: 'normal',
        ordenPortada: 3,
        author: 'Columna invitada',
        autorCargo: 'Politica',
        tiempoLectura: 4,
        summary: 'Sin agenda propia, la oposicion queda definida por aquello que rechaza.',
        content:
            'Una oposicion sin agenda propia termina definida por aquello que rechaza. Es una posicion comoda en el corto plazo y esteril apenas se le exige una propuesta.',
    }),

    nota({
        id: 'demo-regional-1',
        slug: 'produccion-regional-cosecha-gruesa',
        title: 'La cosecha gruesa marca el pulso de la economia del sudoeste chaqueno',
        volanta: 'Produccion',
        seccion: 'regionales',
        jerarquia: 'normal',
        author: 'Redaccion No Pauta',
        tiempoLectura: 5,
        summary:
            'El resultado de la campana define el nivel de actividad comercial de toda la region.',
        content:
            'El resultado de la campana define, con pocos meses de rezago, el nivel de actividad comercial de la region. La cadena es conocida: rinde, precio, capacidad de pago, movimiento en los comercios de los pueblos.',
    }),

    nota({
        id: 'demo-cultura-1',
        slug: 'nueva-generacion-narradores-chaquenos',
        title: 'Una nueva generacion de narradores chaquenos encuentra editorial propia',
        volanta: 'Letras',
        seccion: 'cultura',
        jerarquia: 'normal',
        author: 'Redaccion No Pauta',
        tiempoLectura: 6,
        summary:
            'Sellos independientes publican autores que el circuito comercial no llegaba a leer.',
        content:
            'Sellos independientes empezaron a publicar autores que el circuito comercial no llegaba a leer. El fenomeno es chico en volumen y significativo en efecto: cambia quien decide que se publica.',
    }),
];
