export const findCustomSeparator = (input: string): string => {
	if (!input.startsWith('//')) return '';
	const endOfCustomSeparator = input.indexOf('\n');
	const customSeparator = input.slice(2, endOfCustomSeparator);
	return customSeparator;
}

export const add = (input: string): number => {
	if (input === '') return 0;
	const customSeparator = findCustomSeparator(input);
	console.debug({customSeparator});
	let strNumbers = input;
	if (customSeparator) {
		strNumbers = input.slice(input.indexOf('\n') + 1)
		if (strNumbers.includes(',')) throw new Error(`'${customSeparator}' expected but ',' found at position ${strNumbers.indexOf(',')}.`);
	};

	const defaultSeparators = /,|\n/; // matches comma (,) or newline (\n)
	if (strNumbers.endsWith(',') || strNumbers.endsWith('\n')) throw new Error('Invalid input');

	const numbers = strNumbers.split(customSeparator || defaultSeparators).map(Number);
	return numbers.reduce((acc, num) => acc + num);
}