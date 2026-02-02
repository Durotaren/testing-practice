export function analyzeArray(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const average = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  return {
    max,
    min,
    average,
    length: arr.length,
  };
}
