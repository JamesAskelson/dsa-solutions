def twoSum(self, nums: List[int], target: int) -> List[int]:
        res = {}
        for i in range(len(nums)):
            curr = nums[i]
            diff = target - curr
            if diff in res:
                return [i, res[diff]]
            else:
                res[curr] = i
