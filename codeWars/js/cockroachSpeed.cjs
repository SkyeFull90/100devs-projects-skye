function cockroachSpeed(speed) {
    var cmPerSecond = speed * 100000 / 3600;
    return Math.floor(cmPerSecond);
}
console.log(cockroachSpeed(1.08));

module.exports = cockroachSpeed;