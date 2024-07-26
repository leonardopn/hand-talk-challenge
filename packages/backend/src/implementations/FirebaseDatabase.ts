import { firebaseDatabase } from "../configs/Firebase";
import { INoSqlDatabase } from "../interfaces/INoSqlDatabase";

export class FirebaseDatabase implements INoSqlDatabase {
	generateId(): string {
		const id = firebaseDatabase.ref().push().key;

		if (!id) {
			throw new Error("Error generating id from firebase database");
		}

		return id;
	}

	async saveData<T>(path: string, data: T): Promise<string> {
		const ref = firebaseDatabase.ref(path);
		await ref.set(data);
		return ref.key as string;
	}

	async getData(path: string, limit: number = 20): Promise<any> {
		const dataRef = firebaseDatabase.ref(path).limitToLast(limit);
		const snapshot = await dataRef.once("value");
		return snapshot.val();
	}
}
