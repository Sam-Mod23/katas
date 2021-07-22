const { rollDiceSumProb } = require('../roll_dice_prob');

describe('rollDiceSumProb', () => {
  test('should return 0 for single dice and impossible result', () => {
    expect(rollDiceSumProb(7, 1)).toEqual(0);
  });
  test('should return 1/6 for single dice and possible result', () => {
    expect(rollDiceSumProb(6, 1)).toEqual(1 / 6);
  });
  test('should return 1/18 for 2 dice and possible result 11', () => {
    expect(rollDiceSumProb(11, 2)).toEqual(1 / 18);
  });
  test('should return 5/36 for 2 dice and possible result 8', () => {
    expect(rollDiceSumProb(8, 2)).toEqual(5 / 36);
  });
  test('should return 7/72 for 3 dice and possible result 8', () => {
    expect(rollDiceSumProb(8, 3)).toEqual(7 / 72);
  });
});
