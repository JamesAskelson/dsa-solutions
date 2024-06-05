    def findMin(self, nums: List[int]) -> int:
        low = 0
        high = len(nums) - 1
        while low <= high:
            if nums[low] > nums[high]:
                # for [3,4,5,1,2] starting with initial low/high
                # nums[low] (3) is more than nums[high] (2)
                # so you move to the right
                low = low + 1
            else:
                # else if nums[low] is less than nums[high]
                # it means that you are closer to the lowest value
                # and bring high more to the right
                high = high - 1
        return nums[low]
