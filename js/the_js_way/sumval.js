function sumArray(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
}

console.log(`The sum of the array is ${sumArray([1, 2, 3, 4, 5])}`);