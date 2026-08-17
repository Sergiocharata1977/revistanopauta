import { notFound } from 'next/navigation';
import SetupForm from './setup-form';

/**
 * Alta del primer administrador. CERRADA salvo que se abra a proposito.
 *
 * Esta pantalla crea una cuenta con role: admin sin pedir ninguna credencial
 * previa, porque su razon de ser es arrancar un proyecto Firebase vacio, donde
 * todavia no hay nadie que pueda autorizar el alta. Publicada en internet eso
 * significa que cualquiera que adivine la URL se hace administrador de la
 * revista y publica notas, asi que por defecto responde 404.
 *
 * Para reabrirla hay que poner SETUP_HABILITADO=1 en las variables de entorno
 * de Vercel y redeployar. Se hace asi, y no se borra la pantalla, porque la
 * migracion a un Firebase propio dejo claro que el caso vuelve a aparecer: al
 * estrenar un proyecto no hay otra forma de crear el primer usuario. La
 * secuencia sana es habilitar, crear el usuario y volver a deshabilitar.
 *
 * Una vez que existe un administrador, las altas siguientes van por
 * /admin/users, que exige sesion.
 *
 * La variable no lleva prefijo NEXT_PUBLIC a proposito: asi vive solo en el
 * servidor y no viaja en el bundle del navegador.
 */

// Se evalua en cada request y no queda congelada en el build.
export const dynamic = 'force-dynamic';

export default function SetupPage() {
    if (process.env.SETUP_HABILITADO !== '1') {
        notFound();
    }

    return <SetupForm />;
}
