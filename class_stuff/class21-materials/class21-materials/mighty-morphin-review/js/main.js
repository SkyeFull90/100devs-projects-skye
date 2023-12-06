// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = "YULE"; 
console.log(holiday);
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
function lastThree(str) {
    if (str.length > 3) {
        return str.substring(str.length - 3);
    } else {
        return str;
    }
}
console.log(lastThree("Christmas"));
//alert(lastThree("Christmas"));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subtractFive(num1, num2, num3, num4, num5) {
    let difference = 100 - num1 - num2 - num3 - num4 - num5;
    //alert(Math.abs(difference));
    console.log(Math.abs(difference));
}
subtractFive(1, 2, 3, 4, 5);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowestHighest(num1, num2, num3) {
    let lowest = Math.min(num1, num2, num3);
    let highest = Math.max(num1, num2, num3);
    console.log(lowest, highest);
}
lowestHighest(1, 2, 3);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsTails() {
    let coin = Math.random();
    if (coin < 0.5) {
        return "heads";
    } else {
        return "tails";
    }
}
console.log(headsTails());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function headsTailsAgain(num) {
    for (let i = 1; i <= num; i++) {
        console.log(headsTails());
    }
}
headsTailsAgain(5);