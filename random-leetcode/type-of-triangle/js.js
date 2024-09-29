var triangleType = function(nums) {
    if(nums[0] == nums[1] && nums[0] == nums[2]){
        return 'equilateral'
    }

    let side1 = nums[0] + nums[1]
    let side2 = nums[1] + nums[2]
    let side3 = nums[0] + nums[2]
    if(side1 != side2 && side2 != side3 && side1 != side3){
        return 'scalene'
    }
    if(side1 == side2 || side1 == side3 || side2 == side3){
        return 'isosceles'
    }
};
