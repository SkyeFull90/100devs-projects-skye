function zeroFuel(distance, mpg, fuelLeft) {
    return distance <= mpg * fuelLeft;
}

console.log(zeroFuel(50, 25, 2)); // true

module.exports = zeroFuel;