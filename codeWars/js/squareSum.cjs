function squareSum(numbers) {
  return numbers.reduce((sum, n) => sum + n * n, 0);
}
console.log(squareSum([1, 2]));

module.exports = squareSum;