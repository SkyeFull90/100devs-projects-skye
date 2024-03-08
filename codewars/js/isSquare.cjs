function isSquare(n) {
    if (n < 0) {
        return false;
    }
    let sqrt = Math.sqrt(n);
    return sqrt === Math.floor(sqrt);
}
console.log(isSquare(0)); // true

module.exports = isSquare;