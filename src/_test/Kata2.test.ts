import { describe, expect, it } from 'vitest';
import { add } from '../katas/Kata2';

describe('Kata 2 - String calculator', () => {
	it('Should return 0 when input is empty', () => {
		const result = add('');
		expect(result).toBe(0);
	});
	it('Should return 1 when input is "1"', () => {
		const result = add('1');
		expect(result).toBe(1);
	});
	it('Should return the number when one number is passed', () => {
		const result1 = add('2');
		const result2 = add('33');
		const result3 = add('444');
		expect(result1).toBe(2);
		expect(result2).toBe(33);
		expect(result3).toBe(444);
	});
});