import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics, isSupported } from 'firebase/analytics';

// La configuracion vive en lib/firebase-config.ts para poder usarla tambien
// desde el servidor sin arrastrar el SDK del navegador. Se reexporta para no
// romper los imports existentes.
import { firebaseConfig } from './firebase-config';

export { firebaseConfig };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Analytics disabled temporarily (enable when app is more stable)
let analytics = null;
// if (typeof window !== 'undefined') {
//     isSupported().then(yes => yes && (analytics = getAnalytics(app)));
// }

export { app, auth, db, storage, analytics };
