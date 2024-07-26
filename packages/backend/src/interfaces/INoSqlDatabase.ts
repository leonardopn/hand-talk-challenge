export interface INoSqlDatabase {
	saveData<T>(path: string, data: T): Promise<string>;
	getData(path: string, limit?: number): Promise<any>;
	generateId(): string;
}
