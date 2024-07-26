import { firebaseDatabase } from "../configs/Firebase";
import { INoSqlDatabase } from "../interfaces/INoSqlDatabase";

export class FirebaseDatabase implements INoSqlDatabase {
	async saveData<T>(path: string, data: T): Promise<string> {
		const ref = firebaseDatabase.ref(path).push();
		await ref.set(data);
		return ref.key as string;
	}

	async getData(path: string, limit: number = 20): Promise<any> {
		const dataRef = firebaseDatabase.ref(path).limitToLast(limit);
		const snapshot = await dataRef.once("value");
		return snapshot.val();
	}
}
