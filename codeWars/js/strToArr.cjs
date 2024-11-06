function stringToArray(string) {
    return string.trim().split(" ");
  }
  
  // Examples
  console.log(stringToArray("Robin Singh")); // Output: ["Robin", "Singh"]
  console.log(stringToArray("I love arrays they are my favorite")); // Output: ["I", "love", "arrays", "they", "are", "my", "favorite"]
  
  module.exports = stringToArray;