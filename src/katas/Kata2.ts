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
		// regex that matches anything that is not the custom separator or a number
		const regex = new RegExp(`[^${customSeparator}\\d]`);
		const matches = strNumbers.match(regex);
		if (strNumbers.match(regex)) throw new Error(`'${customSeparator}' expected but '${matches[0]}' found at position ${matches.index}.`);
	};

	const defaultSeparators = /,|\n/; // matches comma (,) or newline (\n)
	if (strNumbers.endsWith(',') || strNumbers.endsWith('\n')) throw new Error('Invalid input');

	const numbers = strNumbers.split(customSeparator || defaultSeparators).map(Number);
	return numbers.reduce((acc, num) => acc + num);
}