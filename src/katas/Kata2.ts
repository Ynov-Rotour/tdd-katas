export const add = (input: string): number => {
	if (input === '') return 0;
	const regex = /,|\n/; // matches comma (,) or newline (\n)
	const numbers = input.split(regex).map(Number);
	return numbers.reduce((acc, num) => acc + num);
}