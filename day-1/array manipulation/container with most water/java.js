var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while (left < right){
        const leftHeight = height[left]
        const rightHeight = height[right]
        const width = right - left;
        const lowerHeight = leftHeight < rightHeight ? leftHeight : rightHeight;
        const storedWater = width * lowerHeight;

        max = storedWater > max ? storedWater : max;
        lowerHeight == leftHeight ? left++ : right--;
    }

    return max;


};


var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1
    let max = 0
    while(left < right){
        let smaller = Math.min(height[left], height[right])
        let product = (right - left) * smaller
        if(product > max){
            max = product
        }

        if(smaller == height[left]){
            left++
        } else {
            right--
        }
    }
    return max
};
