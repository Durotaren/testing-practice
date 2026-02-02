import { analyzeArray } from '../src/analyze-array.js';

test('analyzes a normal array of numbers', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('works regardless of order', () => {
  expect(analyzeArray([5, 1, 9, 3])).toEqual({
    average: 4.5,
    min: 1,
    max: 9,
    length: 4,
  });
});

test('handles a single element array', () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});

test('handles negative numbers', () => {
  expect(analyzeArray([-5, -1, -10])).toEqual({
    average: -5.333333333333333,
    min: -10,
    max: -1,
    length: 3,
  });
});

test('handles decimal numbers', () => {
  const result = analyzeArray([1.5, 2.5, 3]);
  expect(result.average).toBeCloseTo(2.3333);
  expect(result.min).toBe(1.5);
  expect(result.max).toBe(3);
  expect(result.length).toBe(3);
});
