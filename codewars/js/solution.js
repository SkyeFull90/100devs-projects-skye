function sortNumbers(nums) {
  if (nums === null || nums.length === 0) {
    return [];
  } else {
    return [...nums].sort((a, b) => a - b);
  }
}

// Example usage (you can remove this part if you only need the function definition):
console.log(sortNumbers([1, 2, 10, 50, 5])); // Output: [1, 2, 5, 10, 50]
console.log(sortNumbers(null)); // Output: []
console.log(sortNumbers([])); // Output: []

export default sortNumbers;