function chineseGifts(money, giftees) {
  let numberOfEights = 0;
  let gift = 8;
  let children = giftees;
  let given = 0;
  for (let i = 1; i <= children; i++) {
    if (given + gift <= money && money - (given + gift) >= children - i) {
      given += gift;
      if (gift === 8) {
        numberOfEights++;
      }
    } else {
      gift--;
      if (gift === 4 && i === children && gift === money - given) {
        numberOfEights--;
        given -= 8;
        i -= 2;
        gift = 7;
      } else if (gift === 4) {
        i--;
        gift--;
      } else {
        i--;
      }
    }
  }

  return numberOfEights;
}

module.exports = { chineseGifts };
