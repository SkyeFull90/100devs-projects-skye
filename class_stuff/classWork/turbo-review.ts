// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
function favDrink(): void {
    let drink: string = "   Sneak Energy   ";
    console.log(drink.trim());
}
favDrink();

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
function multiWords(): void {
    let words: string = "I love apples";
    console.log(words.includes("apple"));
}   
multiWords();

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockScissorsPaper(): void {
    let choices: string[] = ["rock", "paper", "scissors"];
    let random: number = Math.floor(Math.random() * 3);
    console.log(choices[random]);
}
rockScissorsPaper();

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
let userChoice: string = "rock";
let botChoice: string = "paper";

function game(userChoice: string, botChoice: string): void {
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

// *Loops*
// Create a function that prints out the numbers 1 to 100 to the console
function printNumbers(): void {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
printNumbers();