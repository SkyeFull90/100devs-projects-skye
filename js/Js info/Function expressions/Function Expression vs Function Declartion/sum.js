// Funtion Declartion
function sum(a, b) {
    return a + b;
}

console.log(sum(9,7))

// Function Expression
/*
let sum = function(a, b) {
    return a+b;
};
*/

sayHi("John");

function sayHi(name) {
    alert( `Hell0, ${name}` );
}

let age = prompt("What is your age?", 18);

// conditionally declare a funtion
if (age < 18){

    function welcome() {
        alert("Hello!")
    }
} else {
    function welcome() {
        alert("Greetings!")
    }
}

// ...use it Later
welcome()