def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []
        def backtrack(path, index):
            if index >= len(nums):
                res.append(path[:])
                return

            backtrack(path, index + 1)
            backtrack(path + [nums[index]], index+1)
        backtrack([], 0)
        return res
