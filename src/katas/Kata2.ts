export const add = (input: string): number => {
	if (input === '') return 0;
	const commaIndex = input.indexOf(',');
	if (commaIndex === -1) return parseInt(input);
	const firstNumber = input.substring(0, commaIndex);
	const secondNumber = input.substring(commaIndex + 1);
	return parseInt(firstNumber) + parseInt(secondNumber);
}