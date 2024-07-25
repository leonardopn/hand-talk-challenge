"use strict";
const button = document.createElement("button");
button.innerText = "Ativar Plugin";
button.style.position = "fixed";
button.style.bottom = "10px";
button.style.right = "10px";
button.style.zIndex = "1000"; // Garante que o botão esteja acima de outros elementos
button.style.padding = "10px 20px";
button.style.backgroundColor = "red";
button.style.color = "#ffffff";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.onclick = () => {
	// Coleta de dados
	const data = {
		device: getDeviceType(),
		os: getOperatingSystem(),
		origin: window.location.origin,
		themeChanges: getThemeChangeCount(),
	};
	console.log(data);
	//TODO Envio dos dados para a API
	fetch("http://localhost:3000/collect", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer SEU_TOKEN_AQUI",
		},
		body: JSON.stringify(data),
	}).then(response => {
		if (response.ok) {
			alert("Dados enviados com sucesso!");
		} else {
			alert("Falha ao enviar dados.");
		}
	});
};
document.body.appendChild(button);
function getDeviceType() {
	return /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop";
}
function getOperatingSystem() {
	return navigator.platform;
}
function getThemeChangeCount() {
	// Placeholder para a contagem de mudanças de tema
	return 0;
}
