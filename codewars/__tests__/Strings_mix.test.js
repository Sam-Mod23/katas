const { expect } = require('@jest/globals');
const { mix } = require('../Strings_mix');

describe('mix', () => {
  test('should return correct string for single input with multiple of one letter only', () => {
    const s1 = 'aaaa';
    const expected = '1:aaaa';
    expect(mix(s1)).toEqual(expected);
  });
  test('should return correct string for single input with multiple letters', () => {
    const s1 = 'aaaabbbbb';
    const expected = '1:bbbbb/1:aaaa';
    expect(mix(s1)).toEqual(expected);
  });
  test('should ignore uppercase letters, whitespace and special characters', () => {
    const s1 = 'aaaa  bbb!!b$$b';
    const expected = '1:bbbbb/1:aaaa';
    expect(mix(s1)).toEqual(expected);
  });
  test('should return correct string for multiple inputs with different letters', () => {
    const s1 = 'aaaaa';
    const s2 = 'bbbb';
    const expected = '1:aaaaa/2:bbbb';
    expect(mix(s1, s2)).toEqual(expected);
  });
  test('should return correct string for multiple inputs with rival letters', () => {
    let s1 = 'aaaaa';
    let s2 = 'aaaa';
    let expected = '1:aaaaa';
    expect(mix(s1, s2)).toEqual(expected);
    s1 = 'aaaa';
    s2 = 'aaaaaaa';
    expected = '2:aaaaaaa';
    expect(mix(s1, s2)).toEqual(expected);
  });
  test('should return correct string for multiple inputs with same count of letters', () => {
    const s1 = 'aaaaa';
    const s2 = 'aaaaa';
    const expected = '=:aaaaa';
    expect(mix(s1, s2)).toEqual(expected);
  });
  test('should return correct string for more complex inputs', () => {
    const s1 = 'my&friend&Paul has heavy hats! &';
    const s2 = 'my friend John has many many friends &';
    const expected = '2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss';
    expect(mix(s1, s2)).toEqual(expected);
  });
  test('should return correct string for other more complex inputs', () => {
    const s1 = 'mmmmm m nnnnn y&friend&Paul has heavy hats! &';
    const s2 = 'my frie n d Joh n has ma n y ma n y frie n ds n&';
    const expected = '1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss';
    expect(mix(s1, s2)).toEqual(expected);
  });
  test('should return correct string for one more complex input', () => {
    const s1 = 'Are the kids at home? aaaaa fffff';
    const s2 = 'Yes they are here! aaaaa fffff';
    const expected = '=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh';
    expect(mix(s1, s2)).toEqual(expected);
  });
  test('should order equal results last on string', () => {
    const s1 = 'aaaaabbbbb';
    const s2 = 'aaaaa';
    const expected = '1:bbbbb/=:aaaaa';
    expect(mix(s1, s2)).toEqual(expected);
  });
  test('should sort equal results by s value first', () => {
    const s1 = 'bbbbb';
    const s2 = 'aaaaa';
    const expected = '1:bbbbb/2:aaaaa';
    expect(mix(s1, s2)).toEqual(expected);
  });
  test('should sort equal results by alphabetical if s value is the same', () => {
    const s1 = 'bbbbbaaaaa';
    const s2 = 'ccccc';
    const expected = '1:aaaaa/1:bbbbb/2:ccccc';
    expect(mix(s1, s2)).toEqual(expected);
  });
  test('should not include counts of 1 or below', () => {
    const s1 = 'a';
    const s2 = 'bb';
    const expected = '2:bb';
    expect(mix(s1, s2)).toEqual(expected);
  });
});
