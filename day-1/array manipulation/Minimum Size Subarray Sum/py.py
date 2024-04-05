def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        min_len = math.inf
        sum = 0
        left = 0

        for right in range(0, len(nums)):
            sum = sum + nums[right]

            while sum >= target:
                min_len = min(min_len, right-left+1)
                sum = sum - nums[left]
                left = left + 1

        if min_len == inf:
            return 0
        else:
            return min_len
