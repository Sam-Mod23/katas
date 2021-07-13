const { wave } = require('../Mexican_wave');

describe('wave', () => {
  test('should return correct result for 2 letter word', () => {
    const input = 'me';
    const expected = ['Me', 'mE'];
    expect(wave(input)).toEqual(expected);
  });
  test('should return correct result for larger word', () => {
    const input = 'hello';
    const expected = ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO'];
    expect(wave(input)).toEqual(expected);
  });
  test('should return correct result for another larger word', () => {
    const input = 'codewars';
    const expected = [
      'Codewars',
      'cOdewars',
      'coDewars',
      'codEwars',
      'codeWars',
      'codewArs',
      'codewaRs',
      'codewarS'
    ];
    expect(wave(input)).toEqual(expected);
  });
  test('should return empty array for empty string input', () => {
    const input = '';
    const expected = [];
    expect(wave(input)).toEqual(expected);
  });
  test('should ignore spaces', () => {
    const input = 'two words';
    const expected = [
      'Two words',
      'tWo words',
      'twO words',
      'two Words',
      'two wOrds',
      'two woRds',
      'two worDs',
      'two wordS'
    ];
    expect(wave(input)).toEqual(expected);
  });
});
