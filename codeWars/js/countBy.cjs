function countBy(x, n) {
    let result = [];
    for(let i = 1; i <= n; i++) {
        result.push(i * x);
    }
    return result;
}

console.log(countBy(1,10)); // [1,2,3,4,5,6,7,8,9,10]

module.exports = countBy;