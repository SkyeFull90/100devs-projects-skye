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
  console.log(twoSum([1,6,3,8], 7, [2,8,0,1,7]))
  module.exports = twoSum;