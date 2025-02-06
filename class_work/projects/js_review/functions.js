//create a function that subtracts two numbers and alerts the difference
function subtract(num1, num2) {
    return (num1 - num2);
    //alert(num1 - num2);
}
console.log(subtract(10, 5));

let sub = (n1, n2) => n1-n2
console.log(sub(10, 5));
//create a function that divides two numbers and console logs the quontient
function divide(num1, nnum2, num3) {
    return num1 / nnum2 / num3;
}
console.log(divide(10, 5, 2));

//create a function that multipies three numbers
function multiply(num1, num2, num3) {

    return num1 * num2 * num3;
}
console.log(multiply(5, 7, 2));

// Function to add the first two numbers and return the remainder of the division by the third
function remainder(num1, num2, num3) {
    const sum = num1 + num2;
    return sum % num3; // Calculate the remainder
}
console.log(remainder(10, 5, 3));

function mathingAbout(num1, num2, num3, num4){
    let product = num1 * num2
    if (product > 100){
        console.log(product + num3 + num4)
    } else if (product < 100){
        console.log(product - num3 - num4)
    } else {
        console.log((num1*num2*num3) * num4)
    }
}
mathingAbout(10, 5, 3, 2)