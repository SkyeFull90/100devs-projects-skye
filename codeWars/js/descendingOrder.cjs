function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''));
}
console.log(descendingOrder(123456789)); // 987654321

module.exports = descendingOrder;