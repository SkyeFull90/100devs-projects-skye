function getMiddle(s) {
    let length = s.length;
    let middle = Math.floor(length / 2);
    if (length % 2 === 0) {
        return s.substring(middle - 1, middle + 1);
    } else {
        return s.charAt(middle);
    }
}
console.log(getMiddle("test"));

module.exports = getMiddle;