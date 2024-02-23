function squareSum(n){
    let squaredNumbers = n.map(num => num * num);
    let sum = squaredNumbers.reduce((acc, val) => acc + val, 0);
    return sum;
}

const numbers = [1, 2, 2];
const result = squareSum(numbers);
console.log(result);  // Outputs: 9