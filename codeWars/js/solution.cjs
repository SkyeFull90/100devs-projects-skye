function solution(str) {
    return str.split('').reverse().join('');
}
console.log(solution('hello')); // olleh

module.exports = solution;