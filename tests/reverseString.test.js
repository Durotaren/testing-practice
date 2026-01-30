import { reverseString } from '../src/reverseString';

test('reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverse a string', () => {
  expect(reverseString('')).toBe('');
});

test('reverse a string', () => {
  expect(reverseString('a')).toBe('a');
});

test('reverse a string', () => {
  expect(reverseString('AbC')).toBe('CbA');
});

test('reverse a string', () => {
  expect(reverseString('123!?')).toBe('?!321');
});
