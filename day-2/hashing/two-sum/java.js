var twoSum = function(nums, target) {
    let m = new Map()
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]

        if (m.has(diff)) {
            return [i, m.get(diff)]
        }

        m.set(nums[i], i)
    }
};

var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i]

        if(map.has(diff)){
            return [i, map.get(diff)]
        } else {
            map.set(nums[i], i)
        }
    }
}
