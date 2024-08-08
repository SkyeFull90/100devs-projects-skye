function findSmallestInt(arr) {
    if (arr.length === 0) {
      return undefined; // Handle empty array
    }
  
    return Math.min(...arr); 
  }
  
  // Example usage:
  const numbers = [5, 2, 8, 1, 9];
  const smallestNumber = findSmallestInt(numbers);
  console.log("The smallest number is:", smallestNumber); // Output: 1
  
  module.exports = findSmallestInt;
  // Output: The smallest number is: 1