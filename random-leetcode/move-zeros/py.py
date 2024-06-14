def moveZeroes(nums):
    lastZero = 0
    for i in range(len(nums)):
        if nums[i]:
            nums[lastZero], nums[i] = nums[i], nums[lastZero]
            lastZero += 1
    return nums


print(moveZeroes([0,1,0,3,12]))
