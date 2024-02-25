export function getValueFromFormInput(
	form: HTMLFormElement,
	inputId: string
): string {
	return form.querySelector<HTMLInputElement>(`#${inputId}`)?.value ?? "";
}
