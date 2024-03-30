var productExceptSelf = function(nums) {
    let res = []
    let left = 1;
    let right = 1;
    for(let i = 0; i < nums.length; i++){
        res[i] = left;
        left = left * nums[i]
    }
    for(let j = nums.length -1; j >= 0; j--){
        res[j] *= right;
        right = right * nums[j]
    }
    return res
};

var productExceptSelf = function(nums) {
    let res = [];
    let zeroCount = 0;
    let product = 1;

    // gets a product of all the non zero vals so you have a max sum and also count all the zeros
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCount++;
        } else {
            product *= nums[i];
        }
    }

    // if you have more than 1 zero, then every single time you get every val but the one you are at,
    // you will always include a zero in the product, giving you a zero. this means the return will
    // just be all zeros
    if (zeroCount > 1) {
        return Array(nums.length).fill(0);
    }

    // if you are at zero, just return product as all the other vals are normal nums
    // else if you arent at zero but you have a zero, your product will always be zero
    // else if you have no zeros, push the sum divided by the curr val
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            res.push(product);
        } else if (zeroCount === 1) {
            res.push(0);
        } else {
            res.push(product / nums[i]);
        }
    }

    return res;
};
