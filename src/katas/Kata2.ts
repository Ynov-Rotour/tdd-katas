export const findCustomSeparator = (input: string): string => {
	const endOfCustomSeparator = input.indexOf('\n');
	const customSeparator = input.slice(2, endOfCustomSeparator);
	return customSeparator;
}

export const add = (input: string): number => {
	if (input === '') return 0;
	const customSeparator = findCustomSeparator(input);
	if (customSeparator) {
		input = input.slice(input.indexOf('\n') + 1);
	}
	const regex = /,|\n/; // matches comma (,) or newline (\n)
	if (input.endsWith(',') || input.endsWith('\n')) throw new Error('Invalid input');
	const numbers = input.split(customSeparator || regex).map(Number);
	console.debug(numbers);
	return numbers.reduce((acc, num) => acc + num);
}