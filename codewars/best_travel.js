function chooseBestSum(totalDistance, stops, distances) {
  if (!distances.length || distances.length < stops) return null;
  function subFunc(set, kStops) {
    let options = [];
    if (kStops > set.length || kStops <= 0) {
      return [];
    }
    if (kStops === set.length) {
      return [set];
    }
    if (kStops === 1) {
      for (let i = 0; i < set.length; i++) {
        options.push([set[i]]);
      }
      return options;
    }

    // {1 < k < set.length}

    for (let i = 0; i < set.length - kStops + 1; i++) {
      let head = set.slice(i, i + 1);
      let tailCombinations = subFunc(set.slice(i + 1), kStops - 1);

      for (let j = 0; j < tailCombinations.length; j++) {
        options.push(head.concat(tailCombinations[j]));
      }
    }
    return options;
  }

  // distance calcs
  let availOptions = subFunc(distances, stops);
  let availDistances = availOptions.map((option) => {
    let distanceToTravel = option.reduce((total, elem) => {
      return (total += elem);
    }, 0);
    return distanceToTravel;
  });

  let bestDistance = availDistances.reduce((closest, curr) => {
    let currDiff = totalDistance - curr;
    let closestDiff = totalDistance - closest;
    if (closestDiff < 0) {
      closest = curr;
    } else if (currDiff >= 0 && currDiff < totalDistance - closest) {
      closest = curr;
    }
    return closest;
  }, availDistances[0]);

  return bestDistance <= totalDistance ? bestDistance : null;
}

module.exports = chooseBestSum;

// for every distance,
