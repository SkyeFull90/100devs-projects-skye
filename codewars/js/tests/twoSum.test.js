const chai = require('chai');
const expect = chai.expect;

// Your twoSum function
function twoSum(nums, target) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (seen[complement] !== undefined) {
        return [seen[complement], i];
      }
      seen[nums[i]] = i;
    }
    return [];
  }
// Test cases
function testTwoSum(nums, target, expected) {
  const result = twoSum(nums, target);
  expect(result).to.be.an('array'); // Assert that the result is an array
  expect(result.length).to.equal(2); // Assert the array length is 2
  expect(nums[result[0]] + nums[result[1]]).to.equal(target); // Assert the sum of elements at the returned indices equals the target
}


testTwoSum([2, 7, 11, 15], 9, [0, 1]);
testTwoSum([3, 2, 4], 6, [1, 2]);
testTwoSum([3, 3], 6, [0, 1]);