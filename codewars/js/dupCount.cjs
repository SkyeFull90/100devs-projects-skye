function duplicateCount(text) {
    let count = 0;
    let textArr = text.toLowerCase().split('');
    let uniqueArr = [];
    textArr.forEach((char, index) => {
        if (textArr.indexOf(char) !== index && !uniqueArr.includes(char)) {
            count++;
            uniqueArr.push(char);
        }
    });
    return count;

}
console.log(duplicateCount("Hello World"));

module.exports = duplicateCount;