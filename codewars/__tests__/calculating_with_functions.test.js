const {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy
} = require('../calculating_with_functions');

describe('calculating with functions', () => {
  test('should return correct result for one * two', () => {
    expect(one(times(two()))).toEqual(2);
  });
});
