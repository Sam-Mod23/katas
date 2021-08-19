function exp(number, action) {
  if (!action) {
    return number;
  }
  return action(number);
}

function zero(...args) {}

function one(action) {
  return exp(1, action);
}
function two(action) {
  return exp(2, action);
}
function three() {}
function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

function plus() {}
function minus() {}
function times(num) {
  return function (num2) {
    return num * num2;
  };
}
function dividedBy() {}

module.exports = {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy
};
