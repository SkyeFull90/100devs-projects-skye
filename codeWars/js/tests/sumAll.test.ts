import sumAll from '../sumAll';
import { expect, test } from 'bun:test';

test('sums numbers', () => {
    expect(sumAll([1, 5.2, 4, 0, -1])).toBe(9.2);
    expect(sumAll([])).toBe(0);
    expect(sumAll([-2.398])).toBe(-2.398);
});