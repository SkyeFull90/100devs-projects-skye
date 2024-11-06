function solution(string, ending) {
    // Check if the ending string is a substring of the string and it's at the end
    return string.endsWith(ending);
  }
  
  // Test cases
  console.log(solution('abc', 'bc'));   // Output: true
  console.log(solution('abc', 'd'));    // Output: false
  console.log(solution('abc', ''));     // Output: true
  console.log(solution('', ''));        // Output: true

 module.exports = solution; 