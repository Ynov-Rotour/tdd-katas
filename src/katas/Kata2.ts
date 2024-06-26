export const add = (input: string): number => {
	if (input === '') return 0;
	const numbers = input.split(',').map(Number);
	return numbers.reduce((acc, num) => acc + num);
}