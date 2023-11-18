def containsDuplicate(self, nums: List[int]) -> bool:
        newSet = set()
        for i in range(0, len(nums)):
            num = nums[i]
            if num not in newSet:
                newSet.add(num)
            else:
                return True
        return False
