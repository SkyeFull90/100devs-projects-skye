function countChars(s) {
    let countObj = {};
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(countObj[char]) {
            countObj[char]++;
        } else {
            countObj[char] = 1;
        }
    }
    return countObj;
}
console.log(countChars("Hello World"));

module.exports = countChars;