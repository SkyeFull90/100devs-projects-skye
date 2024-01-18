// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
function favDrink() {
  let drink = "   Sneak Energy   ";
  console.log(drink.trim());
}
favDrink();
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
function multiWords() {
  let words = "I love apples";
  console.log(words.includes("apple"));
}   
multiWords();
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockScissorsPaper() {
  let choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);
  console.log(choices[random]);
}
rockScissorsPaper();
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
let userChoice = "rock";
let botChoice = "paper";

function game(userChoice, botChoice) {
    if (userChoice === botChoice) {
        console.log("Tie");
    } else if (userChoice === "rock" && botChoice === "scissors") {
        console.log("You win");
    } else if (userChoice === "paper" && botChoice === "rock") {
        console.log("You win");
    } else if (userChoice === "scissors" && botChoice === "paper") {
        console.log("You win");
    } else {
        console.log("You lose");
    }
    }
game(userChoice, botChoice);

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function gameLoop() {
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    for (let i = 0; i < choices.length; i++) {
        console.log(choices[random]);
    }
}
gameLoop();