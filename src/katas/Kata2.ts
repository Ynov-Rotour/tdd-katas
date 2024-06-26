export const findCustomSeparator = (input: string): string => {
	const endOfCustomSeparator = input.indexOf('\n');
	const customSeparator = input.slice(2, endOfCustomSeparator);
	return customSeparator;
}

export const add = (input: string): number => {
	if (input === '') return 0;
	const customSeparator = findCustomSeparator(input);
	let strNumbers = input;
	if (customSeparator) strNumbers = input.slice(input.indexOf('\n') + 1);

	const defaultSeparators = /,|\n/; // matches comma (,) or newline (\n)
	if (strNumbers.endsWith(',') || strNumbers.endsWith('\n')) throw new Error('Invalid input');

	const numbers = strNumbers.split(customSeparator || defaultSeparators).map(Number);
	console.debug(numbers);
	return numbers.reduce((acc, num) => acc + num);
}