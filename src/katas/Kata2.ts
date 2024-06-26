export const add = (input: string): number => {
	if (input === '') return 0;
	const regex = /,|\n/; // matches comma (,) or newline (\n)
	if (input.endsWith(',') || input.endsWith('\n')) throw new Error('Invalid input');
	const numbers = input.split(regex).map(Number);
	console.debug(numbers);
	return numbers.reduce((acc, num) => acc + num);
}