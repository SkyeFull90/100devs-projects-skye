function titleCase(title, minorWords = "") {
    const minorWordsSet = new Set(minorWords.toLowerCase().split(" "));
    return title
      .toLowerCase()
      .split(" ")
      .map((word, index) => (index === 0 || !minorWordsSet.has(word)) ? word.charAt(0).toUpperCase() + word.slice(1) : word)
      .join(" ");
  }

  console.log(titleCase('a clash of KINGS','a an the of'))

  module.exports = titleCase;