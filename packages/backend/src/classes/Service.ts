import { FirebaseDatabase } from "../implementations/FirebaseDatabase";
import { INoSqlDatabase } from "../interfaces/INoSqlDatabase";

export class Service {
	protected collection: string;
	protected noSqlDb: INoSqlDatabase;

	constructor(collection: string) {
		if (!collection) {
			throw new Error("Coleção é necessária.");
		}

		this.collection = collection;
		this.noSqlDb = new FirebaseDatabase();
	}
}
