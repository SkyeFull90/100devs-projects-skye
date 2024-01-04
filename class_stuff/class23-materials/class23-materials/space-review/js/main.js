//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
 
function sumArr(arr){
    return arr.reduce((a,b) => a+b, 0);
}
let arr = [4,9,7,17]
//alert(sumArr(arr));
console.log(sumArr(arr));
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squaredArr(arr){
    return arr.map(x => x*x);
}
console.log(squaredArr(arr));
//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
