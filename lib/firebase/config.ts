/**
 * Reexport del Firebase unico de la revista.
 *
 * Este archivo tenia su propia copia de la configuracion, hardcodeada al
 * proyecto heredado dra-casasola-web. Como lib/firebase.ts ya inicializaba
 * revistanopauta, el bundle terminaba con dos initializeApp compitiendo por
 * el mismo app default: el que cargaba primero ganaba y el otro se colgaba
 * en silencio del proyecto ajeno. Por eso el panel autenticaba contra
 * dra-casasola-web mientras la portada leia las notas de revistanopauta.
 *
 * Ahora hay una sola fuente de verdad. Se conserva el archivo, y no se
 * borra, porque lib/firebase/auth.ts importa de aca; asi el arreglo no
 * arrastra un renombre de imports por todo el panel.
 */
export { app as default, app, auth, db, storage, analytics, firebaseConfig } from '../firebase';
