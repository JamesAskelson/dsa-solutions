var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        let curr = nums[i]

        if(map.has(curr) && Math.abs(i - map.get(curr)) <= k){
          return true
        } else {
          map.set(curr, i)
        }
    }

    return false
};
