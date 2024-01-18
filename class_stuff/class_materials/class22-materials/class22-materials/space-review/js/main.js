//Arrays
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr[9]);

//Create and array of numbers. Sum all of the numbers. Alert the sum.
function sumArray(array){
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    sum += array[i];
  }
  alert(sum);
}   
sumArray([1,2,3,4,5,6,7,8,9,10]);

let nums = [78,29,19,78]

let sum = nums.reduce((acc,c) => acc + c, 0) 
console.log(sum)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
