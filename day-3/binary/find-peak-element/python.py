def findPeakElement(self, nums: List[int]) -> int:
        if len(nums) < 2:
            return 0
        if nums[0]>nums[1]:return 0
        if nums[-1]>nums[-2]:return len(nums)-1
        low = 1
        high = len(nums) - 2

        while low <= high:
            mid = math.floor((low + high) / 2)
            curr = nums[mid]
            prev = nums[mid-1]
            next = nums[mid+1]
            if curr > next and curr > prev:
                return mid
            elif curr < next:
                low = low + 1
            else:
                high = high - 1
