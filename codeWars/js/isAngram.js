function isAnagram(str1, str2) {
    // Convert both strings to lowercase for case-insensitive comparison
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Check if the lengths are different, early return false
    if (str1.length !== str2.length) {
        return false;
    }

    // Create a frequency counter object for str1
    const charCount = {};
    for (const char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate through str2 and decrement the count of each character in the frequency counter
    for (const char of str2) {
        if (!charCount[char]) {
            return false; // Character not found in str1
        }
        charCount[char]--;
    }

    // If all characters in str2 were found and their counts matched, return true
    return true;
}
console.log(isAnagram("foefet", "toffee"));
export default isAnagram;
