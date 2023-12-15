var majorityElement = function(nums) {
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        let curr = nums[i]
        if(!obj[curr]){
            obj[curr] = 1;
        } else {
            obj[curr]++
        }
    }
    let max = 0
    let majority = null;
    for(let key in obj){
        if(obj[key] > max){
            max = obj[key]
            majority = key
        }
    }
    return majority
};
