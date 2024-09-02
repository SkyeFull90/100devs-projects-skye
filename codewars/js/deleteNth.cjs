function deleteNth(arr, n) {
    const result = [];
    const counts = {};
  
    for (const num of arr) {
      if (!counts[num] || counts[num] < n) {
        result.push(num);
        counts[num] = (counts[num] || 0) + 1;
      }
    }
  
    return result;
  }

  console.log(deleteNth([1,2,3,8,6,9]))

  module.exports = deleteNth;