function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}
console.log(paperwork(5, 5)); // 25

module.exports = paperwork;
// Path: js/paperwork.cjs