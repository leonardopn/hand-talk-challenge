export class ApiService {
	private baseUrl: string;
	private token: string;

	constructor(token: string) {
		this.baseUrl = "http://localhost:4000";
		this.token = token;
	}

	public async sendData(data: any): Promise<void> {
		const response = await fetch(`${this.baseUrl}/analytics/collect`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${this.token}`,
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error("Failed to send data");
		}
	}
}
