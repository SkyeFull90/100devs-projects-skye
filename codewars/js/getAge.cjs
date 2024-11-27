function getAge (inputString){
    // grab the age from the string
    return parseInt(inputString[0])
}
console.log(getAge("4 years old"))

module.exports = getAge;