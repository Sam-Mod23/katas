function mix(s1, s2) {
  function objectCreator(string = '') {
    const strReplaced = string.replace(/[^a-z]/g, '');
    const strArr = strReplaced.split('');
    const strReduced = strArr.reduce((acc, letter) => {
      acc[letter] = (acc[letter] += 1) || 1;
      return acc;
    }, {});
    for (entry in strReduced) {
      if (strReduced[entry] <= 1) {
        delete strReduced[entry];
      }
    }
    return strReduced;
  }
  const s1Reduced = objectCreator(s1);
  const s2Reduced = objectCreator(s2);

  for (char in s1Reduced) {
    if (s1Reduced[char] < s2Reduced[char]) {
      delete s1Reduced[char];
    } else if (s1Reduced[char] > s2Reduced[char]) {
      delete s2Reduced[char];
    } else if (s1Reduced[char] === s2Reduced[char]) {
      s1Reduced[`=${char}`] = s1Reduced[char];
      delete s1Reduced[char];
      delete s2Reduced[char];
    }
  }

  function totals(reduced, input) {
    const totals = Object.entries(reduced).map((elem) => {
      let letterStr = '';
      let elemChar = elem[0];
      let inputChar = input;
      if (elem[0][0] === '=') {
        elemChar = elem[0][1];
        inputChar = '=';
      }
      for (let i = 1; i <= elem[1]; i++) {
        letterStr += elemChar;
      }
      return `${inputChar}:${letterStr}`;
    });
    return totals;
  }
  const s1Totals = totals(s1Reduced, '1');
  const s2Totals = totals(s2Reduced, '2');

  const combinedTotals = [...s1Totals, ...s2Totals].sort((a, b) => {
    if (b.length === a.length) {
      if (a[0] === '1' && b[0] === '2') {
        return -1;
      }
      if (a[0] === '2' && b[0] === '1') {
        return 1;
      }
      if (a[0] === '=' && b[0] !== '=') {
        return 1;
      }
      if (a[0] !== '=' && b[0] === '=') {
        return -1;
      }
      if (a[2] < b[2]) {
        return -1;
      }
      if (a[2] > b[2]) {
        return 1;
      }
      return 0;
    } else {
      return b.length - a.length;
    }
  });

  if (combinedTotals.length === 1) return combinedTotals.join('');
  return combinedTotals.join('/');
}

module.exports = { mix };

//
