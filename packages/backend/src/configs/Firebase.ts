import admin from "firebase-admin";

import firebaseCredentials from "../../cert/firebase-credentials.json";

const firebaseApp = admin.initializeApp({
	credential: admin.credential.cert({
		clientEmail: firebaseCredentials.client_email,
		privateKey: firebaseCredentials.private_key,
		projectId: firebaseCredentials.project_id,
	}),
	databaseURL: process.env.FIREBASE_DATABASE_URL,
});

export const firebaseDatabase = firebaseApp.database();
