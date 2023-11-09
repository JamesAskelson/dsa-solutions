var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
      let currNum = nums[i]
      for(let j = i+1; j < nums.length; j++) {
        let nextNum = nums[j]
        let numSum = currNum + nextNum
        if(target === numSum) {
          return [i, j]
        }
      }
    }
};
