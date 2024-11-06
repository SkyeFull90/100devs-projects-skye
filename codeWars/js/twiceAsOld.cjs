function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
console.log(twiceAsOld(36, 7)); // 22

module.exports = twiceAsOld;