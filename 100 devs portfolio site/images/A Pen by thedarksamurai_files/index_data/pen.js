//--- Easy
//create a variable and assign it a number
let bob = 89;
//minus 10 from that number
bobity = bob - 10;
//print that number to the console
console.log(bobity);
//--- Medium
//create a variable that holds a value from the input
let inputtedVal = document.querySelector('#danceDanceRevolution').value;
//add 25 to that number
inputVal = inputtedVal + 25;
//alert that number
alert(inputVal);
//--- Hard
//create a variable that holds the h1
const h1holder = document.querySelector('h1');
//add an event listener to that element that console logs the sum of the two previous variables
h1holder.addEventListener('click', sum);
function sum() {
  let inputtedVal = document.querySelector('#danceDanceRevolution').value;
  console.log(bobity + Number(inputtedVal));
}