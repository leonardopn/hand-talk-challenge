export class SendAnalyticDataButton {
	instance: HTMLButtonElement;
	private isLoading = false;

	constructor(buttonStyle?: CSSStyleDeclaration, onClick?: GlobalEventHandlers["onclick"]) {
		this.instance = this.mountButton(onClick);

		this.applyStyle(buttonStyle);
		this.render();
	}

	private mountButton(onClick?: GlobalEventHandlers["onclick"]) {
		const buttonId = "analytics-plugin-button-collect";

		const buttonExists = document.getElementById(buttonId);

		if (buttonExists) {
			return buttonExists as HTMLButtonElement;
		}

		const button = document.createElement("button");
		button.id = buttonId;

		if (onClick) {
			button.onclick = onClick;
		}

		return button;
	}

	applyStyle(style?: CSSStyleDeclaration) {
		this.instance.style.position = "fixed";
		this.instance.style.bottom = "10px";
		this.instance.style.right = "10px";
		this.instance.style.zIndex = "10";
		this.instance.style.padding = "10px 20px";
		this.instance.style.backgroundColor = "#F06F06";
		this.instance.style.color = "#ffffff";
		this.instance.style.border = "none";
		this.instance.style.borderRadius = "5px";
		this.instance.style.cursor = "pointer";
		this.instance.innerText = "Coletar dados";

		this.instance.style.transition = "opacity 0.2s ease-in-out";

		this.instance.onmouseover = () => {
			if (!this.isLoading) {
				this.instance.style.opacity = "0.8";
			}
		};
		this.instance.onmouseout = () => {
			if (!this.isLoading) {
				this.instance.style.opacity = "1";
			}
		};

		Object.assign(this.instance.style, style);
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
			this.instance.style.opacity = "0.5";
			this.instance.disabled = true;
			this.instance.style.cursor = "not-allowed";
		} else {
			this.instance.innerText = "Coletar dados";
			this.instance.disabled = false;
			this.instance.style.opacity = "1";
			this.instance.style.cursor = "pointer";
		}
	}
}
