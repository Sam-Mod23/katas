const chooseBestSum = require('../best_travel');

describe('chooseBestSum', () => {
  test('should return null for empty array', () => {
    expect(chooseBestSum(10, 2, [])).toEqual(null);
  });
  test('should return null if distances.length < stops', () => {
    expect(chooseBestSum(10, 2, [20])).toEqual(null);
  });
  test('should return sum of 2 distances if distances.length === 2 and sum is <= totalDistance', () => {
    expect(chooseBestSum(10, 2, [5, 4])).toEqual(9);
  });
  test('should return sum of 3 distances if distances.length === 2 and sum is <= totalDistance', () => {
    expect(chooseBestSum(20, 3, [5, 4, 6, 7])).toEqual(18);
  });
  test('should return correct result for larger arrays', () => {
    let distances = [91, 74, 73, 85, 73, 81, 87];
    expect(chooseBestSum(230, 3, distances)).toEqual(228);
  });
  test('should return correct result for larger arrays', () => {
    let distances = [50, 55, 56, 57, 58];
    expect(chooseBestSum(163, 3, distances)).toEqual(163);
  });
});
