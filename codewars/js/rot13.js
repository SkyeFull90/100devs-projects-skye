function rot13(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) { // Uppercase letters
      result += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
      result += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
    } else {
      result += text[i];
    }
  }
  return result;
}

console.log(rot13("Hello, World! 123")); // Output: Uryyb, Jbeyq! 123
console.log(rot13("This is a test.")); // Output: Guvf vf n grfg.

export default rot13;