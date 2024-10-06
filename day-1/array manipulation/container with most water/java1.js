var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right) {
        let dist = right - left
        let leftVal = height[left]
        let rightVal = height[right]
        let sum = (leftVal > rightVal) ? rightVal*dist : leftVal*dist
        if(sum > max) {
            max = sum
        }
        leftVal > rightVal ? right -= 1 : left += 1
    }
    return max
};
