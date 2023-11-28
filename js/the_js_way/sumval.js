function sumArray(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
}

console.log(`The sum of the array is ${sumArray([1, 2, 3, 4, 5])}`);

function maxArray(values) {
    let max = values[0];
    for (let i = 1; i < values.length; i++) {
        if (values[i] > max) {
            max = values[i];
        }
    }
    return max;
}

console.log(`The max of the array is ${maxArray([1, 2, 3, 4, 5])}`);