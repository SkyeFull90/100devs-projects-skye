// write a function that shows a factorial of a number
// using a recursive function
function factorial(num) {
    // if the num is less than 0 reject it
    if(num < 0){
        return -1;
    }
    // If the num is 0, its factorial is 1
    if(num === 0){
        return 1;
    }
    // otherwise call the recursive procedure again
    else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(5));

export default factorial;
