/**
 * Configuracion publica del proyecto Firebase.
 *
 * Vive en su propio modulo porque la usan dos mundos distintos:
 * - lib/firebase.ts, que arranca el SDK del navegador;
 * - lib/server/notas.ts, que consulta la API REST desde el servidor.
 *
 * Importarla desde lib/firebase.ts en el servidor arrastraria todo el SDK
 * cliente y ejecutaria initializeApp de mas, por eso queda separada.
 *
 * Estos valores no son secretos: son los identificadores publicos del
 * proyecto. Lo que protege los datos son las reglas de firestore.rules.
 */
export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyAenIIfZXK8CYbrYS7B8EJqL3_kMhKkOmw',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'revistanopauta.firebaseapp.com',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'revistanopauta',
    storageBucket:
        process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'revistanopauta.firebasestorage.app',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '782170319066',
    appId:
        process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||
        '1:782170319066:web:2c52e4a03826a00ff31de3',
};
