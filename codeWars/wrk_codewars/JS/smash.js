function smashWords(words) {
    // Use the join() method to concatenate the words with spaces in between
    return words.join(' ');
}
// bring our smash function to our array
const wordArray = ["Hello", "world", "this", "is", "a", "sample", "sentence"];
const result = smashWords(wordArray);
console.log(result);  // Should output: "Hello world this is a sample sentence"
