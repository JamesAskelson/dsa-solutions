    def dominantIndex(self, nums: List[int]) -> int:
        largest = None
        index = None
        for i in range(len(nums)):
            if largest == None:
                largest = nums[i]
                index = i
            elif nums[i] > largest:
                largest = nums[i]
                index = i

        for num in nums:
            if num*2 > largest and num != largest:
                return -1

        return index

