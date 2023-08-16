const readline = require('readline');

function ageChecker() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Please enter your age: ', age => {
    if (age >= 16) {
      console.log("You can drive.");
    } else {
      console.log("You can't drive.");
    }
    rl.close();
  });
}

module.exports = ageChecker;
