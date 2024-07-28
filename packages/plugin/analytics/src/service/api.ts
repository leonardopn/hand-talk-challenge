export class ApiService {
	private baseUrl: string;
	private token: string;

	constructor(token: string) {
		this.baseUrl = process.env.API_URL || "";
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
			if (response.status !== 200) {
				const body = await response.json();
				const errorMessage = body.message || "Erro ao enviar dados";

				throw new Error(errorMessage);
			}
		}
	}
}
