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
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyArvoaEjaJpGNwkUbg3I5Cd68WovHOQGgo',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'dra-casasola-web.firebaseapp.com',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'dra-casasola-web',
    storageBucket:
        process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'dra-casasola-web.firebasestorage.app',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '787477542103',
    appId:
        process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||
        '1:787477542103:web:a69baa95716a38227dac92',
};
