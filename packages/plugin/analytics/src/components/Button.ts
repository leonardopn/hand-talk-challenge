export class Button {
	instance: HTMLButtonElement;

	constructor(buttonStyle?: CSSStyleDeclaration, onClick?: GlobalEventHandlers["onclick"]) {
		this.instance = this.mountButton(buttonStyle, onClick);

		this.render();
	}

	private mountButton(
		buttonStyle?: CSSStyleDeclaration,
		onClick?: GlobalEventHandlers["onclick"]
	) {
		const buttonId = "analytics-plugin-button-collect";

		const buttonExists = document.getElementById(buttonId);

		if (buttonExists) {
			return buttonExists as HTMLButtonElement;
		}

		const button = document.createElement("button");

		button.style.position = "fixed";
		button.style.bottom = "10px";
		button.style.right = "10px";
		button.style.zIndex = "10";
		button.style.padding = "10px 20px";
		button.style.backgroundColor = "blue";
		button.style.color = "#ffffff";
		button.style.border = "none";
		button.style.borderRadius = "5px";
		button.style.cursor = "pointer";
		button.innerText = "Coletar dados";
		button.id = buttonId;

		if (onClick) {
			button.onclick = onClick;
		}

		if (buttonStyle) {
			Object.assign(button.style, buttonStyle);
		}

		return button;
	}

	render() {
		document.body.appendChild(this.instance);
	}

	remove() {
		this.instance.remove();
	}
}
