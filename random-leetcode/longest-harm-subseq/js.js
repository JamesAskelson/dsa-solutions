var findLHS = function(nums) {
    let map = new Map()
    for(let ele of nums){
        // if count from map for the ele is 0, it will now be 1, otherwise it will keep adding up so each val in nums will have the count as the number of times it pops up
        let count = map.get(ele) || 0;
        map.set(ele, count+1)
    }

    let res = 0
    for(let val of map){
        let [ele, count] = val
        // we look at whatever is the curr ele+1 and see if the count of the curr ele and the ele+1 counts are more than res, if so make res that 
        if(map.has(ele+1)){
            res = Math.max(res, count + map.get(ele+1))
        }
    }
    return res
};
