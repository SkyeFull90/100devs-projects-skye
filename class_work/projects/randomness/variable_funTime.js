//create a variable and assign it to a number
let num = 11
//minus 10 from that number
num = num - 10

//print that num to the console
console.log(num)

//create a varible that holds a value from input
//let numFromInput = Number(document.querySelector('#put').value)

//add 25 to that number
//numFromInput += 25
//alert that number
//alert(numFromInput)

const h1 = document.querySelector('h1')
h1.addEventListener('click', addTwo)
function addTwo(){
    let numFromInput = Number(document.querySelector('#put').value)
    numFromInput += 25
    console.log(num + numFromInput) 
}