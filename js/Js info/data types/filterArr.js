let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let filterArr = arr.filter((item) => item % 2 === 0);
console.log(filterArr); // [ 2, 4, 6, 8 ]

// from js info
function filterRange(arr, a, b) {
    // added a and b to the function
    return arr.filter(item => (a <= item && item <= b));
}

let arr2 = [5, 3, 8, 1];
let filtered = filterRange(arr2, 1, 4);
console.log(filtered); // 3,1 (matching values)
console.log(arr2); // 5,3,8,1 (not modified)
