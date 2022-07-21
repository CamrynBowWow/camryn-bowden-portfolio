import { config } from '../config/config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export const firebaseInitialize = initializeApp(config.firebaseConfig);

const firestoreDb = getFirestore(firebaseInitialize);

const collectionRef = collection(firestoreDb, 'domains');

export let collectionData: any = [];

getDocs(collectionRef)
	.then((snapshot) => {
		snapshot.docs.forEach((doc) => {
			collectionData.push({ ...doc.data(), id: doc.id });
		});
	})
	.catch((err) => {});
