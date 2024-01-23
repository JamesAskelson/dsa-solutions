var arrangeCoins = function(n) {
    let total = n;
    let sub = 1;
    let count = 0;
    while(total > 0){
        total = total - sub;
        if(total < 0) {
            return count
        }
        count++
        sub++
    }
    return count
};
