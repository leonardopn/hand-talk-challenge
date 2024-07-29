import { SendAnalyticDataButton } from "./index";
import { fireEvent, screen } from "@testing-library/dom";
import "@testing-library/jest-dom";

describe("SendAnalyticDataButton", () => {
	let buttonComponent: SendAnalyticDataButton;
	let onClickMock: jest.Mock;

	beforeEach(() => {
		document.body.innerHTML = ""; // Reset DOM before each test
		onClickMock = jest.fn();
		buttonComponent = new SendAnalyticDataButton(onClickMock);
	});

	it("should create and mount the button", () => {
		const buttonElement = document.getElementById("analytics-plugin-button-collect");

		expect(buttonElement).toBeInTheDocument(); // Check if button exists in the DOM
		expect(buttonElement?.innerText).toBe("Coletar dados"); // Check if button has correct text
	});

	it("should call the onClick function when the button is clicked", () => {
		const buttonElement = document.getElementById("analytics-plugin-button-collect");

		fireEvent.click(buttonElement!);

		expect(onClickMock).toHaveBeenCalledTimes(1); // Verify that the click handler was called once
	});

	it("should render the button in the document body", () => {
		expect(document.body.contains(buttonComponent.instance)).toBe(true); // Check if button is appended to the body
	});

	it("should remove the button from the DOM", () => {
		buttonComponent.remove();

		const buttonElement = document.getElementById("analytics-plugin-button-collect");
		expect(buttonElement).not.toBeInTheDocument(); // Verify that the button is removed from the DOM
	});

	it("should toggle the loading state", () => {
		// Toggle to loading state
		buttonComponent.toggleLoading();
		expect(buttonComponent.instance.innerText).toBe("Enviando dados..."); // Check if text changes to loading
		expect(buttonComponent.instance).toBeDisabled(); // Check if button is disabled

		// Toggle back to default state
		buttonComponent.toggleLoading();
		expect(buttonComponent.instance.innerText).toBe("Coletar dados"); // Check if text reverts back
		expect(buttonComponent.instance).not.toBeDisabled(); // Check if button is enabled
	});

	it("should't render the same button twice in the DOM", () => {
		new SendAnalyticDataButton(onClickMock);

		expect(screen.getAllByRole("button").length).toBe(1);
	});
});
