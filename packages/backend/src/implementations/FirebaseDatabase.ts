import { firebaseDatabase } from "../configs/Firebase";
import { INoSqlDatabase } from "../interfaces/INoSqlDatabase";
import { Query } from "firebase-admin/database";

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

	async getMany<T extends string, R>(
		path: string,
		where?: {
			equals?: {
				field: T;
				value: string;
			};
		},
		orderByField?: {
			field: T;
			direction: "asc" | "desc";
		},
		limit?: { direction: "start" | "end"; value: number }
	): Promise<R[]> {
		let query: Query = firebaseDatabase.ref(path);

		if (where?.equals) {
			query = query.orderByChild(where.equals.field).equalTo(where.equals.value);
		}

		if (limit) {
			if (limit.direction === "start") {
				query = query.limitToFirst(limit.value);
			} else {
				query = query.limitToLast(limit.value);
			}
		}

		if (orderByField?.direction === "asc") {
			query = query.orderByChild(orderByField.field);
		}

		const snapshot = await query.once("value");

		const dataArray: R[] = [];

		snapshot.forEach(childSnapshot => {
			dataArray.push(childSnapshot.val());
		});

		if (orderByField?.direction === "desc") {
			dataArray.reverse();
		}

		return dataArray;
	}
}
