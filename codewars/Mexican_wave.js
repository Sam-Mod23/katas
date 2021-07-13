function wave(str) {
  //   const waveStr = [];
  //   for (let i = 0; i < str.length; i++) {
  //     if (/[a-z]/.test(str[i])) {
  //       const strArr = str.split('');
  //       const uppercase = strArr[i].toUpperCase();
  //       strArr[i] = uppercase;
  //       waveStr.push(strArr.join(''));
  //     }
  //   }
  //   return waveStr;
  const waveArr = str.split('').reduce((acc, elem, index) => {
    if (/[a-z]/.test(elem)) {
      const strArr = str.split('');
      strArr[index] = elem.toUpperCase();
      acc[index] = strArr.join('');
    }
    return acc;
  }, []);
  return waveArr.filter((elem) => {
    return elem !== undefined;
  });
}

module.exports = { wave };
