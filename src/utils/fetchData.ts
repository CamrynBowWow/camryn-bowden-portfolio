import { getFirestore, collection } from 'firebase/firestore';
import { config } from '../config/config';
import { initializeApp } from 'firebase/app';

initializeApp(config.firebaseConfig);

const firestoreDb = getFirestore();

export const collectionRef = collection(firestoreDb, 'domains');
