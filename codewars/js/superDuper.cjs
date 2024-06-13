function problem(value) {
    // Check if the value is a number using typeof
    if (typeof value !== 'number') {
      return "Error";
    }
    // If it's a number, perform the calculation
    return value * 50 + 6;
  }

  // Test cases
  console.log(problem(5)); // Output: 256
  console.log(problem(10.5)); // Output: 530.5
  console.log(problem("hello")); // Output: Error

module.exports = problem;