function range(start, end, step = 1) {
  let numbers = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      numbers.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      numbers.push(i);
    }
  }
  return numbers;
}

function sum(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(range(1, 10)));  // Outputs: 55
console.log(range(1, 10, 2));  // Outputs: [1, 3, 5, 7, 9]
console.log(range(5, 2, -1));  // Outputs: [5, 4, 3, 2]