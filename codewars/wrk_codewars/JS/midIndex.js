function findMiddleElements(arr) {
    let result = [];
    let n = arr.length;

    // Check if the size of the array is even or odd
    if (n % 2 === 0) {
        // If even, append two middle elements to the result array
        result.push(arr[n / 2 - 1]);
        result.push(arr[n / 2]);
    } else {
        // If odd, append the single middle element to the result array
        result.push(arr[Math.floor(n / 2)]);
    }

    return result;
}

// Sample array
let arr = [1, 2, 3, 4, 5];

// Find middle elements using the function
let middleElements = findMiddleElements(arr);

// Display the middle element(s)
console.log("Middle Element(s):", middleElements.join(" "));
