function roundToNext5(n){

    return n + (5 - n % 5) % 5;

}

module.exports = roundToNext5;