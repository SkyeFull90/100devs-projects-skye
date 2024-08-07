import { test, expect } from 'bun:test';
import titleCase from '../titleCase.cjs';

test('should handle minor words correctly', () => {
  expect(titleCase('the WIND in the WILLOWS', 'The In')).toBe('The Wind in the Willows');
});

test('should capitalize the first word even if it is a minor word', () => {
  expect(titleCase('the quick brown fox')).toBe('The Quick Brown Fox');
});

test('should handle empty minor words list', () => {
  expect(titleCase('the quick brown fox')).toBe('The Quick Brown Fox');
});
