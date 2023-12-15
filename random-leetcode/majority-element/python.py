def majorityElement(self, nums: List[int]) -> int:
        obj = {}
        for i in range(0, len(nums)):
            curr = nums[i]
            if curr not in obj:
                obj[curr] = 1
            else:
                obj[curr] += 1
        max = 0
        majority = None
        for key in obj:
            if obj[key] > max:
                max = obj[key]
                majority = key
        return majority

def majorityElement(self, nums: List[int]) -> int:
        mode = statistics.mode(nums)
        return mode
