function doubleChar(str) {
    return str.split('').map(char => char + char).join('');
}

// Example usage
const inputString = "String";
const outputString = doubleChar(inputString);
console.log(outputString);

module.exports = doubleChar;