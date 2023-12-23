function sum(numbers) {
    // The reduce function is used to reduce the array to a single value.
    // The (a, b) => a + b function is the reducer, it takes two values and returns their sum.
    // The 0 is the initial value. If the array is empty, this will be the result.
    return numbers.reduce((a, b) => a + b, 0);
}

module.exports = sum;