import { capitalize } from '../src/capitalize';

test('capitalize first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalize first letter', () => {
  expect(capitalize('Hello')).toBe('Hello');
});

test('capitalize first letter', () => {
  expect(capitalize('')).toBe('');
});

test('capitalize first letter', () => {
  expect(capitalize('a')).toBe('A');
});

test('capitalize first letter', () => {
  expect(capitalize('123')).toBe('123');
});
