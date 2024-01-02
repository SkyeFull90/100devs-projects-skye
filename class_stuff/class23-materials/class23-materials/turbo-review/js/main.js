// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let bob = "Hello Wolrd, are you a user or a porgram?"
alert(bob.includes("?"));
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
function replace(string){
    let newString = string.replace("jr. dev", "software engineer")
    return newString
}
console.log(replace("I am a jr. dev"))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function randomRockPaperScissors(){
    let random = Math.floor(Math.random() * 3)
    if(random === 0){
        return "rock"
    } else if(random === 1){
        return "paper"
    } else {
        return "scissors"
    }
}
console.log(randomRockPaperScissors())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function rockPaperScissors(choice){
    let botChoice = randomRockPaperScissors()
    if(choice === "rock" && botChoice === "scissors"){
        return "You win!"
    } else if(choice === "paper" && botChoice === "rock"){
        return "You win!"
    } else if(choice === "scissors" && botChoice === "paper"){
        return "You win!"
    } else if(choice === botChoice){
        return "It's a tie!"
    } else {
        return "You lose!"
    }
}
console.log(rockPaperScissors("rock"))
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function rockPaperScissorsArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(rockPaperScissors(array[i]))
    }
}
rockPaperScissorsArray(["rock", "paper", "scissors"])