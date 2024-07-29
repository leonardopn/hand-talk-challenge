import admin from "firebase-admin";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

import firebaseCredentials from "../../cert/firebase-credentials.json";

const firebaseApp = admin.initializeApp({
	credential: admin.credential.cert({
		clientEmail: firebaseCredentials.client_email,
		privateKey: firebaseCredentials.private_key,
		projectId: firebaseCredentials.project_id,
	}),
	databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: firebaseCredentials.project_id,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const firebaseWebApp = initializeApp(firebaseConfig);

export const firebaseDatabase = firebaseApp.database();
export const firebaseAuthAdmin = firebaseApp.auth();
export const firebaseAuthWeb = getAuth(firebaseWebApp);
