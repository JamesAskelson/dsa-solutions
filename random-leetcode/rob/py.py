    def rob(self, nums: List[int]) -> int:
        houses = len(nums)
        if houses < 2:
            return houses[0]
        dp = [0] * houses
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])
        for i in range(2, houses):
            dp[i] = max(dp[i-1], nums[i] + dp[i-2])
        return dp[-1]
