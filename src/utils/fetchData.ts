import { config } from '../config/config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

initializeApp(config.firebaseConfig);

const firestoreDb = getFirestore();

const collectionRef = collection(firestoreDb, 'domains');

export let collectionData: any = [];

getDocs(collectionRef)
	.then((snapshot) => {
		snapshot.docs.forEach((doc) => {
			collectionData.push({ ...doc.data(), id: doc.id });
		});
	})
	.catch((err) => {
		console.log('Why did you look here?!');
	});
