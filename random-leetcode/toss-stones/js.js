var lastStoneWeight = function(stones) {
    while(stones.length > 1){
        stones.sort((a,b)=>a-b);
        stones[stones.length - 2] = stones[stones.length - 1] - stones[stones.length - 2]
        stones.pop()
    }

    return stones[0]
};
