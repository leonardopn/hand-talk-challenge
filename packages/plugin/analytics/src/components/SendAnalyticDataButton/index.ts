import "./styles.scss";

export class SendAnalyticDataButton {
	instance: HTMLButtonElement;
	private isLoading = false;

	constructor(onClick?: GlobalEventHandlers["onclick"]) {
		this.instance = this.mountButton(onClick);

		this.render();
	}

	private mountButton(onClick?: GlobalEventHandlers["onclick"]) {
		const buttonId = "analytics-plugin-button-collect";
		const buttonClass = "analytics-plugin-button-collect";

		const buttonExists = document.getElementById(buttonId);

		if (buttonExists) {
			return buttonExists as HTMLButtonElement;
		}

		const button = document.createElement("button");

		button.id = buttonId;
		button.className = buttonClass;
		button.innerText = "Coletar dados";

		if (onClick) {
			button.onclick = onClick;
		}

		return button;
	}

	render() {
		document.body.appendChild(this.instance);
	}

	remove() {
		this.instance.remove();
	}

	toggleLoading() {
		this.isLoading = !this.isLoading;

		if (this.isLoading) {
			this.instance.innerText = "Enviando dados...";
			this.instance.disabled = true;
		} else {
			this.instance.innerText = "Coletar dados";
			this.instance.disabled = false;
		}
	}
}
