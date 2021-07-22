function rollDiceSumProb(result, totalDie) {
  if (result > totalDie * 6) return 0; //
  if (result < 1) return 0; //

  function combinations(res, tDice) {
    if (res > tDice * 6) return 0;
    if (res < 1 * tDice) return 0;
    if (tDice === 1) return 1;
    let combin = 0;
    for (let i = 1; i <= 6; i++) {
      combin += combinations(res - i, tDice - 1);
    }
    return combin;
  }
  const possibilities = combinations(result, totalDie);

  const prob = possibilities / Math.pow(6, totalDie);
  return prob;
}

module.exports = { rollDiceSumProb };

// base case is when totalDie = 1
//
