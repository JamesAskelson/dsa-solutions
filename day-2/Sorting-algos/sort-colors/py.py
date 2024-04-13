def sortColors(self, nums: List[int]) -> None:
        low = 0
        high = len(nums) - 1
        i = 0
        while i <= high:
            if nums[i] == 0:
                nums[i] = nums[low]
                nums[low] = 0
                low= low+1
                i= i+1
            elif nums[i] == 2:
                nums[i] = nums[high]
                nums[high] = 2
                high = high-1
            else:
                i=i+1
