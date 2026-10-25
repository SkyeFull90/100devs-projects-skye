export function findAverage(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum / nums.length;
}
console.log(findAverage([1, 2, 3, 4, 5]));