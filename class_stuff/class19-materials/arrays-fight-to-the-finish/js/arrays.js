//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [10, 20, 30]
function numArr() {
    nums.forEach((item, i) => {
        nums[i] = item + 3
    })
    return nums;
}

let newArr = numArr()
console.log('Updated nums: ', newArr)
//Find the average of all the numbers from question three
function averageOfNumArr(){
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        sum = sum + nums[i]
    }
    console.log(sum / nums.length)
}
averageOfNumArr()