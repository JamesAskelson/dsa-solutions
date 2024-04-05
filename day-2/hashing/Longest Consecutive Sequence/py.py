def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0

        nums_tup = set(nums)
        maximum = 0
        for num in nums_tup:
            if num-1 not in nums_tup:
                curr = num
                count = 0

                while curr in nums_tup:
                    count = count + 1
                    curr = curr + 1
            maximum = max(count, maximum)
        return maximum
