function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}
console.log(removeExclamationMarks("Hello World!")); // "Hello World"

module.exports = removeExclamationMarks;