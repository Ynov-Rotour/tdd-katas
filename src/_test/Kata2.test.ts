import { describe, expect, it } from 'vitest';
import { add, findCustomSeparator } from '../katas/Kata2';

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
	it('Should return the sum of two numbers when two numbers are passed', () => {
		const result1 = add('1,2');
		expect(result1).toBe(3);
	});
	it('Should handle "\\n" as separator in addition of comma', () => {
		const result1 = add('1\n2');
		expect(result1).toBe(3);
		const result2 = add('1\n2,3');
		expect(result2).toBe(6);
	});
	it('Should handle mutliseparators', () => {
		const result = add('1\n,2');
		expect(result).toBe(3);
	});
	it('Should throw an error if a separator is at the end of the string', () => {
		const addFn = () => add('1,2,');
		expect(addFn).toThrowError('Invalid input');
	});
	it('Should handled custom separators', () => {
		const result = add('//;\n1;2');
		expect(result).toBe(3);
	});
});

describe('Kata 2 - Find custom separator', () => {
	it('Should return custom separator when input starts with "//"', () => {
		const result = findCustomSeparator('//;\n1;2');
		const result2 = findCustomSeparator('//,\n1,2');
		const result3 = findCustomSeparator('//...\n1.2');
		expect(result).toBe(';');
		expect(result2).toBe(',');
		expect(result3).toBe('...');
	});
	it('Should return empty string when input does not start with "//"', () => {
		const result = findCustomSeparator('1,2');
		expect(result).toBe('');
	});
});