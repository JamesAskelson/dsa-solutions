var mySqrt = function(x) {
    let low = 0;
    let high = x
    while(low <= high){
        let mid = (low+high)/2
        if(mid*mid > x){
            high = high - 1
        } else if(mid*mid < x){
            low = low + 1
        } else {
            return mid
        }
    }
    return high
};
