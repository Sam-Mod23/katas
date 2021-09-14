const { chineseGifts } = require('../chinese_gifts');

describe('chineseGifts', () => {
  test('should return 0 if no 8s are given', () => {
    expect(chineseGifts(7, 1)).toEqual(0);
  });
  test('should return integer if money splits evenly as 8s', () => {
    expect(chineseGifts(16, 2)).toEqual(2);
  });
  test('should return correct value for 8s as long as no 4s given', () => {
    expect(chineseGifts(17, 3)).toEqual(2);
  });
  test('should return 1 if last gift is 4', () => {
    expect(chineseGifts(20, 3)).toEqual(1);
  });
  test('should return 0 if 8 not possible without a 4 being given', () => {
    expect(chineseGifts(12, 2)).toEqual(0);
  });
  test('should return 1 if given 9 total for 2 children', () => {
    expect(chineseGifts(9, 2)).toEqual(1);
  });
  test('should return 3 for 31 and 4 children', () => {
    expect(chineseGifts(31, 4)).toEqual(3);
  });
  test('should return 4 for 35 and 5 children', () => {
    expect(chineseGifts(35, 5)).toEqual(4);
  });
  test('should return 4 for 39 and 6 children', () => {
    expect(chineseGifts(39, 6)).toEqual(4);
  });
  test('should return max number if money left over', () => {
    expect(chineseGifts(35, 3)).toEqual(3);
  });
});
