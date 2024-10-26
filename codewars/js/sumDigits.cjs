function sumDigits(number){
    const digits = Math.abs(number).toString().split('');

    return digits.reduce((sum, digit) => sum + parseInt(digit), 0);
}

console.log(sumDigits(10))
console.log(sumDigits(99))
console.log(sumDigits(-32))

module.exports = sumDigits;