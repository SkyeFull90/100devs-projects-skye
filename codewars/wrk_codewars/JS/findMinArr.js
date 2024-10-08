function findSmallestInt(arr) {
    if (arr.length === 0) {
      return undefined; // Handle a empty array
    }
  
    return Math.min(...arr); 
  }
  
  // Potenial usage:
  const numbers = [5, 2, 8, 1, 9];
  const smallestNumber = findSmallestInt(numbers);
  console.log("The smallest number is:", smallestNumber); // Output: 1
  // Output: The smallest number is: 1