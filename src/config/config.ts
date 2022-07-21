import { APIKEY, AUTHDOMAIN, PROJECTID, STORAGEBUCKET, MESSAGINGSENDERID, APPID, MEASUREMENTID } from '../envValues';

export const config = {
	firebaseConfig: {
		apiKey: APIKEY,
		authDomain: AUTHDOMAIN,
		projectId: PROJECTID,
		storageBucket: STORAGEBUCKET,
		messagingSenderId: MESSAGINGSENDERID,
		appId: APPID,
		measurementId: MEASUREMENTID,
	},
};
