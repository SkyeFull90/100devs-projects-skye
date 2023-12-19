function findShort(s){
  return Math.min(...s.split(' ').map(word => word.length));
}
findShort("bitcoin take over the world maybe who knows perhaps");

module.exports = findShort;
