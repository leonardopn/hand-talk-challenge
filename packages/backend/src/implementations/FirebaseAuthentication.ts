import { signInWithCustomToken, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuthAdmin, firebaseAuthWeb } from "../configs/Firebase";
import { IAuthentication } from "../interfaces/IAuthentication";
import { FirebaseAuthError } from "../errors/FirebaseAuthError";

export class FirebaseAuthentication implements IAuthentication {
	async authenticate(email: string, password: string) {
		try {
			const { user } = await signInWithEmailAndPassword(firebaseAuthWeb, email, password);

			const token = await firebaseAuthAdmin.createCustomToken(user.uid);

			return { token };
		} catch (error) {
			throw new FirebaseAuthError(error);
		}
	}

	async verifyToken(token: string) {
		try {
			const { user } = await signInWithCustomToken(firebaseAuthWeb, token);

			const idToken = await user.getIdToken(true);

			const parsedToken = await firebaseAuthAdmin.verifyIdToken(idToken);
			return { uid: parsedToken.uid };
		} catch (error) {
			throw new FirebaseAuthError(error);
		}
	}
}
