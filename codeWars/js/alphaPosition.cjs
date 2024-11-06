function alphabetPosition(text) {
  
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const result = [];
    for (const char of text) {
      if (char.match(/[a-z]/i)) {  // Check if character is a letter (case-insensitive)
        const position = alphabet.indexOf(char.toLowerCase()) + 1;  // Find position (1-indexed)
        result.push(position.toString());  // Convert position to string for concatenation
      }
    }
    return result.join(" ");  // Join positions with spaces
  }
  
  // Example usage
  const text = "The sunset sets at twelve o' clock.";
  const encodedText = alphabetPosition(text);
  console.log(encodedText);  // Output: 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11

module.exports = alphabetPosition;