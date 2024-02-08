function highAndLow(numbers){
  let arr = numbers.split(' ').map(Number);
  return Math.max(...arr) + ' ' + Math.min(...arr);
}
//highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"); // "42 -9"
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"

module.exports = highAndLow;