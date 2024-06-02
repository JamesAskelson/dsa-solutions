def twoSum(self, nums: List[int], target: int) -> List[int]:
        mapp = {}
        for i in range(len(nums)):
            difference = target - nums[i]
            if difference in mapp:
                return [mapp[difference], i]
            else:
                mapp[nums[i]] = i
