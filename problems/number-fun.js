function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n < 1 || n > 1000000) {
    throw new RangeError(`${n} is outside the range of 1 and 1000000`);
  }

  return 1 / n
}

module.exports = {
  returnsThree,
  reciprocal
};

// try {
//   const num = -5;
//   reciprocal(num);
// } catch (e) {
//   console.log(e.message)
// }
