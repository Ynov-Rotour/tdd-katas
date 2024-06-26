import { describe, expect, it } from 'vitest';
import { add } from '../katas/Kata2';

describe('Kata 2 - String calculator', () => {
	it('Should return 0 when input is empty', () => {
		const result = add('');
		expect(result).toBe(0);
	});
});