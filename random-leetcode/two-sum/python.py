    def twoSum(self, nums: List[int], target: int) -> List[int]:
        differences = {}
        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in differences:
                return [i, differences[diff]]
            else:
                differences[nums[i]] = i
