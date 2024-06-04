    def maxSubArray(self, nums: List[int]) -> int:
        min_sum = nums[0]
        max_sum = nums[0]
        result = nums[0]

        for i in range(1, len(nums)):
            if nums[i] < 0:
                max_sum, min_sum = min_sum, max_sum

            max_sum = max(nums[i], max_sum+nums[i])
            min_sum = max(nums[i], min_sum+nums[i])

            result = max(result, max_sum)
        return result

    def maxSubArray(self, nums: List[int]) -> int:
        max_sum = 0
        result = float('-inf')

        for num in nums:
            max_sum = max_sum + num
            if max_sum > result:
                result = max_sum
            if max_sum < 0:
                max_sum = 0
        return result
