import { describe } from 'vitest';

describe('Kata 2 - String calculator', () => {
	it('Should return 0 when input is empty', () => {
		const result = add('');
		expect(result).toBe(0);
	});
});