def permute(self, nums: List[int]) -> List[List[int]]:
        res = []
        new_set = set()
        def backtrack(i):
            if i == len(nums) and tuple([*nums]) not in new_set:
                res.append([*nums])
                new_set.add(tuple([*nums]))
                return
            j = i
            for j in range(len(nums)):
                if i < len(nums):
                    [nums[i], nums[j]] = [nums[j], nums[i]]
                    backtrack(i+1)
                    [nums[i], nums[j]] = [nums[j], nums[i]]
                else:
                    return
        backtrack(0)
        return res
