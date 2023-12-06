//*Variables
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
function favHoliday(holiday: string){
    console.log(holiday.toUpperCase());
}
favHoliday("Yule");
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
function lastThree(str: string){
    console.log(str.substring(str.length - 3));
}
lastThree("Hello");
//alert("Hello".charAt(1));
//* Functions
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subtract(num1: number, num2: number, num3: number, num4: number, num5: number){
    let total = 100 - num1 - num2 - num3 - num4 - num5;
    console.log(Math.abs(total));
}
subtract(1,2,3,4,5);
// Create a function that takes in 3 numbers. Console log the lowest and highest values. Call the function.
function lowestHighest(num1: number, num2: number, num3: number){   
    console.log(Math.min(num1, num2, num3));
    console.log(Math.max(num1, num2, num3));
}
lowestHighest(1,2,3);
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsTails(){
    let flip = Math.random();
    if (flip < 0.5){
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}
headsTails();
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times when x is the number passed into the function. Call the function.
function headsTails2(num: number){
    for (let i = 0; i < num; i++){
        headsTails();
    }
}
headsTails2(5);