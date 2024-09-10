    def threeSumClosest(self, nums: List[int], target: int) -> int:
        res = float('-inf')
        nums = sorted(nums)

        for i in range(len(nums) - 1):
            left = i + 1
            right = len(nums) - 1
            while left < right:
                total = nums[left] + nums[right] + nums[i]
                if total == target:
                    return total
                if abs(total - target) < abs(res - target):
                    res = total
                if total > target:
                    right -= 1
                else:
                    left += 1
        return res
