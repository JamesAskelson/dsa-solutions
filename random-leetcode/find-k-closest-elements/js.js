var findClosestElements = function(arr, k, x) {
    let low = 0;
    let high = arr.length - k;
    while(low < high){
        let mid = Math.floor((low+high) / 2)
        if(x - arr[mid] > arr[mid+k] - x) {
            low = mid + 1
        } else {
            high = mid
        }
    }
    return arr.slice(low, low + k)
};
