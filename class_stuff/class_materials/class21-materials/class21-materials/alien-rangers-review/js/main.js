//Arrays
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printArray([1, 2, 3, 4, 5]);
//Create an array of tv shows. Loop through and print each show to the console
let tvShows = ["The Office", "Parks and Rec", "The Good Place", "Brooklyn 99"];
for (let i = 0; i < tvShows.length; i++) {
    console.log(tvShows[i]);
}
tvShows.forEach(function (show) {
    console.log(show);
}
);

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}
console.log(evenNumbers);
let evenNumbers2 = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log(evenNumbers2);
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second-highest number
function sumLowHigh(arr) {
    let sortedArr = arr.sort(function (a, b) {
        return a - b;
    });
    let sum = sortedArr[1] + sortedArr[sortedArr.length - 2];
    //alert(sum);
    return sum;
}
console.log(sumLowHigh([1, 2, 3, 4, 5, 6, 7, 8, 9]));