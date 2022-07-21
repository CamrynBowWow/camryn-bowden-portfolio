import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { config } from '../config/config';

const db = initializeApp(config.firebaseConfig);

const firestoreDatabase = getFirestore(db);

const domainRef = collection(firestoreDatabase, 'domains');

export const docs = getDocs(domainRef).then((snapshot) => {
	console.log(snapshot.docs);
});

// export const querySnapshot = getDocs(collection(firestoreDatabase, 'domains'));
// querySnapshot.forEach((doc) => {
// 	console.log(`${doc.id} => ${doc.data()}`);
// });
