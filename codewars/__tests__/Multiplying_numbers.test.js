const { multiply } = require('../Multiplying_numbers');

describe('Multiply', () => {
  test('should fulfill base test of single digit numbers', () => {
    const x = '4';
    const y = '3';
    const expected = '12';
    expect(multiply(x, y)).toEqual(expected);
  });
  test('should fulfill basic calc for x length of 1', () => {
    const x = '4';
    const y = '12';
    const expected = '48';
    expect(multiply(x, y)).toEqual(expected);
  });
  test('should work for 2 digit numbers', () => {
    const x = '22';
    const y = '11';
    const expected = '242';
    expect(multiply(x, y)).toEqual(expected);
  });
  test('should work for one large number', () => {
    const x = '20';
    const y = '123456';
    const expected = '2469120';
    expect(multiply(x, y)).toEqual(expected);
  });
  test('should work for two large numbers', () => {
    const x = '12345';
    const y = '6789';
    const expected = '83810205';
    expect(multiply(x, y)).toEqual(expected);
  });
  test('should not return number as exponential 1', () => {
    const x = '1020303004875647366210';
    const y = '2774537626200857473632627613';
    const expected = '2830869077153280552556547081187254342445169156730';
    expect(multiply(x, y)).toEqual(expected);
  });
  test('should not return number as exponential 2', () => {
    const x = '58608473622772837728372827';
    const y = '7586374672263726736374';
    const expected = '444625839871840560024489175424316205566214109298';
    expect(multiply(x, y)).toEqual(expected);
  });
  test('should not return number as exponential 3', () => {
    const x = '9007199254740991';
    const y = '9007199254740991';
    const expected = '81129638414606663681390495662081';
    expect(multiply(x, y)).toEqual(expected);
  });
});
