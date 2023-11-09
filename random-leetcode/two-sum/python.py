def twoSum(nums, target):
    res = []
    for i in range(len(nums)):
        num = nums[i]
        for j in range(i+1, len(nums)):
            num2 = nums[j]
            sum = num + num2
            if sum == target:
                res = [i, j]
        return res
