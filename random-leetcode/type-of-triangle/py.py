    def triangleType(self, nums: List[int]) -> str:
        if nums[0] == nums[1] and nums[0] == nums[2]:
            return 'equilateral'
    side1 = nums[0] + nums[1]
    side2 = nums[1] + nums[2]
    side3 = nums[0] + nums[2]

    if side1 != side2 and side2 != side3 and side1 != side3:
        return 'scalene'
    if side1 == side2 or side2 == side3 or side1 == side3:
        return 'isosceles'
