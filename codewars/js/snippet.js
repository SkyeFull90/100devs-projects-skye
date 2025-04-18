function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  const minVal = Math.min(...numbers);
  const minIndex = numbers.indexOf(minVal);

  return numbers.filter((_, i) => i !== minIndex);
}

console.log(removeSmallest([1, 2, 3, 4, 5])); // Output: [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])); // Output: [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])); // Output: [2, 2, 2, 1]
console.log(removeSmallest([]));

 // Output: []
export default removeSmallest;