export interface IAuthentication {
	authenticate: (email: string, password: string) => Promise<{ token: string }>;
	verifyToken: (token: string) => Promise<{ uid: string }>;
}
