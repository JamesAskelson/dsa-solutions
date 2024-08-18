    def missingNumber(self, nums: List[int]) -> int:
        arrsum = 0
        for num in nums:
            arrsum += num
        n = len(nums)
        total = (n*(n+1))//2
        return total - arrsum
