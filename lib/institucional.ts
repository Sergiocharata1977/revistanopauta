import { siteConfig } from './site-config';

/**
 * Paginas institucionales de la revista.
 *
 * Son las que sostienen la credibilidad de un medio: quien lo hace, con
 * que criterio publica y como corrige. Los textos son un punto de partida
 * redactado para Pauta; la direccion editorial deberia revisarlos y firmarlos
 * antes de salir a produccion.
 */

export type PaginaInstitucional = {
    slug: string;
    titulo: string;
    volanta: string;
    bajada: string;
    /** Cada elemento es un parrafo; si empieza con "## " se rinde como subtitulo. */
    cuerpo: string[];
};

export const paginasInstitucionales: PaginaInstitucional[] = [
    {
        slug: 'quienes-somos',
        titulo: 'Quienes somos',
        volanta: 'Institucional',
        bajada: `${siteConfig.nombreCompleto} es un medio digital con base en ${siteConfig.ciudad}, dedicado a cubrir la actualidad politica, economica y social de la region.`,
        cuerpo: [
            `${siteConfig.nombreCompleto} nacio con una premisa simple de enunciar y dificil de sostener: publicar lo que se puede verificar, aunque incomode, y no publicar lo que no se puede verificar, aunque convenga.`,
            '## Que cubrimos',
            'Trabajamos sobre el area de influencia del sudoeste chaqueno y sobre los temas provinciales y nacionales que impactan de manera directa en la vida de nuestros lectores. No competimos por volumen: competimos por precision.',
            '## Como nos financiamos',
            'La sostenibilidad de un medio define su independencia. Por eso hacemos publica la composicion de nuestros ingresos y diferenciamos de manera visible cualquier contenido patrocinado del contenido editorial. Un aviso siempre se ve como un aviso.',
            '## Como contactarnos',
            `Para datos, denuncias o documentacion: ${siteConfig.email}. Protegemos la identidad de nuestras fuentes.`,
        ],
    },
    {
        slug: 'linea-editorial',
        titulo: 'Linea editorial',
        volanta: 'Institucional',
        bajada: 'Los criterios con los que decidimos que se publica, como se publica y que no se publica.',
        cuerpo: [
            '## Verificacion antes que velocidad',
            'Una nota sale cuando esta chequeada, no cuando esta escrita. Si la verificacion no llega, la nota no sale, aunque otro medio la haya publicado antes.',
            '## Fuentes',
            'Preferimos las fuentes identificadas. Cuando usamos una fuente reservada, lo decimos de manera explicita y explicamos por que se reserva. Nunca inventamos una cita ni atribuimos declaraciones que no fueron dichas.',
            '## Separacion entre informacion y opinion',
            'Las columnas de opinion se publican firmadas, con un aviso visible, y en una seccion propia. La opinion de un columnista no compromete la posicion de la revista.',
            '## Conflictos de interes',
            'Ningun integrante de la redaccion cubre temas en los que tenga interes economico, familiar o politico directo. Cuando existe un vinculo que el lector deberia conocer, se declara dentro de la nota.',
            '## Contenido patrocinado',
            'Todo contenido pago se identifica como tal en el titulo y en el cuerpo. No aceptamos publicidad que condicione la cobertura periodistica.',
        ],
    },
    {
        slug: 'staff',
        titulo: 'Staff y redaccion',
        volanta: 'Institucional',
        bajada: 'Quienes escriben, quienes editan y quienes responden por lo que se publica.',
        cuerpo: [
            'Un medio que no dice quien lo hace le pide al lector una confianza que no ofrece. Esta pagina lista a las personas que integran la redaccion y sus areas de responsabilidad.',
            '## Direccion editorial',
            'Responsable de la linea editorial y de la decision final sobre que se publica.',
            '## Redaccion',
            'Cubre las secciones de politica, economia, sociedad, judiciales, regionales, cultura y deportes.',
            '## Columnistas',
            'Firman bajo su propio nombre. Sus columnas expresan posiciones personales.',
            'Pendiente de completar con los nombres, cargos y contactos definitivos del equipo.',
        ],
    },
    {
        slug: 'correcciones',
        titulo: 'Politica de correcciones',
        volanta: 'Institucional',
        bajada: 'Nos equivocamos. Lo que define a un medio es que hace despues.',
        cuerpo: [
            '## Corregimos a la vista',
            'Cuando detectamos un error en una nota publicada, lo corregimos y dejamos constancia al pie: que decia antes, que dice ahora y cuando se corrigio. No borramos el error en silencio.',
            '## Como reportar un error',
            `Escribinos a ${siteConfig.email} indicando el enlace de la nota y el dato que considerás incorrecto. Revisamos todos los reportes.`,
            '## Derecho a replica',
            'Toda persona o institucion mencionada en una nota tiene derecho a que su version sea publicada. Nos comprometemos a incorporarla con la misma jerarquia que la nota original.',
            '## Despublicacion',
            'No despublicamos notas salvo orden judicial o riesgo cierto para la integridad de una persona. Corregir es preferible a borrar.',
        ],
    },
    {
        slug: 'contacto',
        titulo: 'Contacto',
        volanta: 'Institucional',
        bajada: 'Datos, denuncias, correcciones, publicidad y colaboraciones.',
        cuerpo: [
            '## Redaccion',
            `${siteConfig.email}. Es la via para enviar datos, documentacion o denuncias. Protegemos la identidad de quien aporta informacion.`,
            '## Correcciones',
            'Si detectaste un error en una nota, escribinos con el enlace y el dato a corregir.',
            '## Publicidad',
            'Aceptamos publicidad identificada como tal. No aceptamos acuerdos que condicionen la cobertura.',
            '## Colaboraciones',
            'Recibimos propuestas de notas y columnas. Enviá un resumen de la idea y una breve presentacion de tu trabajo previo.',
            `## Donde estamos`,
            `${siteConfig.ciudad}.`,
        ],
    },
    {
        slug: 'terminos',
        titulo: 'Terminos de uso',
        volanta: 'Legales',
        bajada: 'Condiciones bajo las cuales se accede y se reutiliza el contenido del sitio.',
        cuerpo: [
            '## Propiedad del contenido',
            `Los textos, fotografias y piezas graficas publicados en este sitio son propiedad de ${siteConfig.nombreCompleto} o de sus autores, salvo indicacion en contrario.`,
            '## Reproduccion',
            'Se permite la cita parcial con mencion expresa de la fuente y enlace a la nota original. La reproduccion total requiere autorizacion previa por escrito.',
            '## Responsabilidad',
            'El contenido se publica de buena fe y con la verificacion disponible al momento de publicar. Las columnas de opinion son responsabilidad de quien las firma.',
            '## Comentarios y aportes',
            'Nos reservamos el derecho de no publicar aportes que contengan datos personales de terceros, incitacion a la violencia o afirmaciones no verificables presentadas como hechos.',
        ],
    },
    {
        slug: 'privacidad',
        titulo: 'Politica de privacidad',
        volanta: 'Legales',
        bajada: 'Que datos recolectamos, para que los usamos y como se ejerce el derecho a eliminarlos.',
        cuerpo: [
            '## Datos que recolectamos',
            'Datos de navegacion agregados y anonimos con fines estadisticos, y los datos que el propio lector nos envia de manera voluntaria al escribirnos.',
            '## Uso',
            'Los datos de navegacion se usan para entender que se lee y mejorar la cobertura. No se venden ni se ceden a terceros con fines comerciales.',
            '## Fuentes',
            'La informacion que identifica a una fuente periodistica no se almacena junto con los datos del sitio y no se entrega salvo orden judicial firme.',
            '## Derechos del lector',
            `Podés solicitar el acceso, la rectificacion o la eliminacion de tus datos escribiendo a ${siteConfig.email}.`,
        ],
    },
];

export function getPaginaInstitucional(slug: string): PaginaInstitucional | undefined {
    return paginasInstitucionales.find((p) => p.slug === slug);
}
