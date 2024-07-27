export interface INoSqlDatabase {
	saveData<T>(path: string, data: T): Promise<string>;
	getMany<T extends string, R>(
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
		limit?: {
			direction: "start" | "end";
			value: number;
		}
	): Promise<R[]>;
	generateId(): string;
}
