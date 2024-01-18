// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function firstLast(arr) {
    if (arr[0] < arr[arr.length - 1]) {
        //alert("Hi");
        console.log("Hi");
    } else if (arr[0] > arr[arr.length - 1]) {
        //alert("Bye");
        console.log("Bye");
    } else {
        //alert("We close in an hour");
        console.log("We close in an hour");
    }
}
firstLast([5, 25, 3, 41, 7]);
