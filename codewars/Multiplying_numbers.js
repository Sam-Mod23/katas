function multiply(x, y) {
  if (x.length === 1 && y.length === 1) {
    return (parseInt(x) * parseInt(y)).toString();
  }
  let large = x;
  let small = y;

  if (x.length < y.length) {
    large = y;
    small = x;
  }
  const largeArr = large.split('').map((numStr) => {
    return parseInt(numStr);
  });
  const smallArr = small.split('').map((numStr) => {
    return parseInt(numStr);
  });
  const multsRequired = largeArr.length;
  let sumNumArr = largeArr.map(() => {
    return [];
  });

  let carry = 0;
  let zeroes = 0;

  for (let i = smallArr.length - 1; i >= 0; i--) {
    for (let j = largeArr.length - 1; j >= 0; j--) {
      let sum = largeArr[j] * smallArr[i];
      if (carry) {
        sum += carry;
        carry = 0;
      }
      if (sum > 9) {
        carry = parseInt(sum.toString()[0]);
        sum = parseInt(sum.toString()[1]);
      }
      sumNumArr[zeroes].unshift(sum);
      if (carry && j === 0) {
        sumNumArr[zeroes].unshift(carry);
        carry = 0;
      }
    }
    zeroes++;
  }

  for (let k = 0; k < sumNumArr.length; k++) {
    let sumStr = sumNumArr[k]
      .map((num) => {
        return num.toString();
      })
      .join('');

    sumNumArr[k] = sumStr + '0'.repeat(k);
  }

  if (
    sumNumArr.every((elem) => {
      return elem.length < 15;
    })
  ) {
    return sumNumArr
      .reduce((acc, curr) => {
        return acc + parseInt(curr);
      }, 0)
      .toString();
  } else {
    // --------Long addition of elements----------

    const final = sumNumArr.reduce((acc, elem, index) => {
      let elemArr = elem.split('');
      let largeArr = elemArr;
      let smallArr = acc.split('');

      if (elemArr.length < acc.length) {
        largeArr = acc.split('');
        smallArr = elemArr;
      }
      if (smallArr.length < largeArr.length) {
        let lenDiff = largeArr.length - smallArr.length;
        for (let i = 0; i < lenDiff; i++) {
          smallArr.unshift('0');
        }
      }

      let carry = 0;
      let sumArr = [];
      for (let l = largeArr.length - 1; l >= 0; l--) {
        let digitSum = parseInt(largeArr[l]) + parseInt(smallArr[l]) + carry;

        carry = 0;

        if (digitSum > 9) {
          carry = parseInt(digitSum.toString()[0]);
          digitSum = digitSum.toString()[1];
        }
        sumArr.unshift(digitSum);
        if (l === 0 && carry) {
          sumArr.unshift(carry);
        }
      }
      return sumArr.join('');
    }, '');
    if (/^0+/.test(final)) {
      final = final.replace(/^0+/, '');
    }
    return final;
  }
}

module.exports = { multiply };

// 9007199254740991 << largest integer in js

// Karatsuba method - does not work for large numbers, returns exponential format

// if (x.length === 1 && y.length === 1) {
//     return (parseInt(x) * parseInt(y)).toString();
//   }

//   let n = x.length <= y.length ? x.length : y.length;
//   let m = Math.round(n / 2);
//   let a = x.slice(0, x.length - m) || '0';
//   let b = x.slice(x.length - m);
//   let c = y.slice(0, y.length - m) || '0';
//   let d = y.slice(y.length - m);

//   let ac, bd, abcd;

//   if (a.length > 1 || c.length > 1) {
//     ac = parseInt(multiply(a, c));
//   } else {
//     ac = parseInt(a) * parseInt(c);
//   }
//   if (b.length > 1 || d.length > 1) {
//     bd = parseInt(multiply(b, d));
//   } else {
//     bd = parseInt(b) * parseInt(d);
//   }
//   if (a.length > 1 || c.length > 1 || b.length > 1 || d.length > 1) {
//     abcd =
//       parseInt(multiply(a, c)) +
//       parseInt(multiply(a, d)) +
//       parseInt(multiply(b, c)) +
//       parseInt(multiply(b, d));
//   } else {
//     abcd = (parseInt(a) + parseInt(b)) * (parseInt(c) + parseInt(d));
//   }

//   let remain = abcd - bd - ac;

//   let xy = ac * Math.pow(10, m * 2) + remain * Math.pow(10, m) + bd;
//   let result = xy.toString();

//   return result;

// long addition formula

// -------------------------------------
function add(x, y) {
  let largeArr = x.split('');
  let smallArr = y.split('');

  if (x.length < y.length) {
    largeArr = y.split('');
    smallArr = x.split('');
  }

  if (smallArr.length < largeArr.length) {
    let lenDiff = largeArr.length - smallArr.length;
    for (let i = 0; i < lenDiff; i++) {
      smallArr.unshift('0');
    }
  }
  console.log(largeArr, smallArr);

  let carry = 0;
  let sumArr = [];
  for (let j = largeArr.length - 1; j >= 0; j--) {
    let sumElem = parseInt(largeArr[j]) + parseInt(smallArr[j]) + carry;
    carry = 0;
    if (sumElem > 9) {
      carry = parseInt(sumElem.toString()[0]);
      sumElem = sumElem.toString()[1];
    }
    sumArr.unshift(sumElem);
  }
  console.log(sumArr);
  return sumArr.join('');
}
