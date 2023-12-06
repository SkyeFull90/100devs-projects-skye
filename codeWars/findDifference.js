function findDifference(a, b) {
    return Math.abs(a.reduce((acc, cur) => acc * cur) - b.reduce((acc, cur) => acc * cur));
}
findDifference([3, 2, 5], [1, 4, 4]);

// 14
module.exports = findDifference;