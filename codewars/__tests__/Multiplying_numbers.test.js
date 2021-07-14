const { multiply } = require('../Multiplying_numbers');

describe('Multiply', () => {
  test('should fulfill base test of single digit numbers', () => {
    const x = '4';
    const y = '3';
    const expected = '12';
    expect(multiply(x, y)).toEqual(expected);
  });
  test('should fulfill base test for x length of 1', () => {
    const x = '4';
    const y = '12';
    const expected = '48';
    expect(multiply(x, y)).toEqual(expected);
  });
  test('should work recursively for one large number', () => {
    const x = '20';
    const y = '123456';
    const expected = '2469120';
    expect(multiply(x, y)).toEqual(expected);
  });
  test('should work recursively for two large numbers', () => {
    const x = '12345';
    const y = '6789';
    const expected = '83810205';
    expect(multiply(x, y)).toEqual(expected);
  });
  test('should not return number as exponential', () => {
    const x = '1020303004875647366210';
    const y = '2774537626200857473632627613';
    const expected = '2830869077153280552556547081187254342445169156730';
    expect(multiply(x, y)).toEqual(expected);
  });
});
