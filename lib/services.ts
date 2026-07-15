import {
    collection,
    doc,
    getDocs,
    getDoc,
    addDoc,
    setDoc,
    updateDoc,
    deleteDoc,
    query,
    orderBy,
    where,
    Timestamp,
} from 'firebase/firestore';
import { db } from './firebase';
import { firebaseConfig } from './firebase';
import type { User, News, Event, Collaborator, Task } from './types';
import type { User as FirebaseAuthUser } from 'firebase/auth';

// ============ USERS SERVICE ============
const usersCollection = collection(db, 'users');

type CreateUserInput = Omit<User, 'id' | 'createdAt' | 'updatedAt'> & {
    password: string;
};

async function createFirebaseAuthUser(email: string, password: string): Promise<string> {
    const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
        }
    );

    const payload = await response.json();

    if (!response.ok) {
        const message = payload?.error?.message || 'No se pudo crear el usuario en Firebase Auth';
        throw new Error(message);
    }

    return payload.localId;
}

export const UsersService = {
    async getAll(): Promise<User[]> {
        const q = query(usersCollection, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as User));
    },

    async ensureProfileForAuthUser(authUser: FirebaseAuthUser): Promise<void> {
        const docRef = doc(db, 'users', authUser.uid);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) return;

        const now = new Date().toISOString();
        await setDoc(docRef, {
            email: authUser.email || '',
            displayName: authUser.displayName || 'Administrador',
            role: 'admin',
            phone: '',
            isActive: true,
            createdAt: now,
            updatedAt: now,
        });
    },

    async getById(id: string): Promise<User | null> {
        const docRef = doc(db, 'users', id);
        const snapshot = await getDoc(docRef);
        if (!snapshot.exists()) return null;
        return { id: snapshot.id, ...snapshot.data() } as User;
    },

    async create(data: CreateUserInput): Promise<string> {
        const now = new Date().toISOString();
        const { password, ...profileData } = data;
        const uid = await createFirebaseAuthUser(profileData.email, password);

        await setDoc(doc(db, 'users', uid), {
            ...profileData,
            createdAt: now,
            updatedAt: now,
        });

        return uid;
    },

    async update(id: string, data: Partial<User>): Promise<void> {
        const docRef = doc(db, 'users', id);
        await updateDoc(docRef, {
            ...data,
            updatedAt: new Date().toISOString(),
        });
    },

    async delete(id: string): Promise<void> {
        const docRef = doc(db, 'users', id);
        await deleteDoc(docRef);
    },
};

// ============ NEWS SERVICE ============
const newsCollection = collection(db, 'news');

export const NewsService = {
    async getAll(): Promise<News[]> {
        const q = query(newsCollection, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as News));
    },

    async getPublished(): Promise<News[]> {
        const q = query(newsCollection, where('published', '==', true), orderBy('publishedAt', 'desc'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as News));
    },

    async getById(id: string): Promise<News | null> {
        const docRef = doc(db, 'news', id);
        const snapshot = await getDoc(docRef);
        if (!snapshot.exists()) return null;
        return { id: snapshot.id, ...snapshot.data() } as News;
    },

    async create(data: Omit<News, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
        const now = new Date().toISOString();
        const docRef = await addDoc(newsCollection, {
            ...data,
            createdAt: now,
            updatedAt: now,
        });
        return docRef.id;
    },

    async update(id: string, data: Partial<News>): Promise<void> {
        const docRef = doc(db, 'news', id);
        await updateDoc(docRef, {
            ...data,
            updatedAt: new Date().toISOString(),
        });
    },

    async delete(id: string): Promise<void> {
        const docRef = doc(db, 'news', id);
        await deleteDoc(docRef);
    },
};

// ============ EVENTS SERVICE ============
const eventsCollection = collection(db, 'events');

export const EventsService = {
    async getAll(): Promise<Event[]> {
        const q = query(eventsCollection, orderBy('startDate', 'desc'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Event));
    },

    async getUpcoming(): Promise<Event[]> {
        const now = new Date().toISOString();
        const q = query(eventsCollection, where('startDate', '>=', now), orderBy('startDate', 'asc'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Event));
    },

    async getById(id: string): Promise<Event | null> {
        const docRef = doc(db, 'events', id);
        const snapshot = await getDoc(docRef);
        if (!snapshot.exists()) return null;
        return { id: snapshot.id, ...snapshot.data() } as Event;
    },

    async create(data: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
        const now = new Date().toISOString();
        const docRef = await addDoc(eventsCollection, {
            ...data,
            createdAt: now,
            updatedAt: now,
        });
        return docRef.id;
    },

    async update(id: string, data: Partial<Event>): Promise<void> {
        const docRef = doc(db, 'events', id);
        await updateDoc(docRef, {
            ...data,
            updatedAt: new Date().toISOString(),
        });
    },

    async delete(id: string): Promise<void> {
        const docRef = doc(db, 'events', id);
        await deleteDoc(docRef);
    },
};

// ============ COLLABORATORS SERVICE ============
const collaboratorsCollection = collection(db, 'collaborators');

export const CollaboratorsService = {
    async getAll(): Promise<Collaborator[]> {
        const q = query(collaboratorsCollection, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Collaborator));
    },

    async getById(id: string): Promise<Collaborator | null> {
        const docRef = doc(db, 'collaborators', id);
        const snapshot = await getDoc(docRef);
        if (!snapshot.exists()) return null;
        return { id: snapshot.id, ...snapshot.data() } as Collaborator;
    },

    async create(data: Omit<Collaborator, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
        const now = new Date().toISOString();
        const docRef = await addDoc(collaboratorsCollection, {
            ...data,
            createdAt: now,
            updatedAt: now,
        });
        return docRef.id;
    },

    async update(id: string, data: Partial<Collaborator>): Promise<void> {
        const docRef = doc(db, 'collaborators', id);
        await updateDoc(docRef, {
            ...data,
            updatedAt: new Date().toISOString(),
        });
    },

    async delete(id: string): Promise<void> {
        const docRef = doc(db, 'collaborators', id);
        await deleteDoc(docRef);
    },
};

// ============ TASKS SERVICE ============
const tasksCollection = collection(db, 'tasks');

export const TasksService = {
    async getAll(): Promise<Task[]> {
        const q = query(tasksCollection, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Task));
    },

    async getByStatus(status: Task['status']): Promise<Task[]> {
        const q = query(tasksCollection, where('status', '==', status), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Task));
    },

    async getById(id: string): Promise<Task | null> {
        const docRef = doc(db, 'tasks', id);
        const snapshot = await getDoc(docRef);
        if (!snapshot.exists()) return null;
        return { id: snapshot.id, ...snapshot.data() } as Task;
    },

    async create(data: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
        const now = new Date().toISOString();
        const docRef = await addDoc(tasksCollection, {
            ...data,
            createdAt: now,
            updatedAt: now,
        });
        return docRef.id;
    },

    async update(id: string, data: Partial<Task>): Promise<void> {
        const docRef = doc(db, 'tasks', id);
        await updateDoc(docRef, {
            ...data,
            updatedAt: new Date().toISOString(),
        });
    },

    async delete(id: string): Promise<void> {
        const docRef = doc(db, 'tasks', id);
        await deleteDoc(docRef);
    },
};
