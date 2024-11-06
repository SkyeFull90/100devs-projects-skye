function toJadenCase(str) {
    // Split the string into words (lowercase)
    const words = str.toLowerCase().split(" ");
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    // Join the capitalized words back with spaces
    return capitalizedWords.join(" ");
  }

console.log(toJadenCase("hello world"));

module.exports = toJadenCase;