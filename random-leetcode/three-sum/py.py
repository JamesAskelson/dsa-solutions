    def threeSum(self, nums: List[int]) -> List[List[int]]:
        mapp = set([])
        res = []
        low = 0
        high = len(nums) - 1
        mid = len(nums) // 2
        nums = nums.sort()
        while low < mid and mid < high:
            curr = (nums[low], nums[mid], nums[high])
            total = nums[low] + nums[mid] + nums[high]
            if total == 0 and curr not in mapp:
                res.append((nums[low], nums[mid], nums[high]))
                mapp.add(curr)
            if total > 0:
                high = high - 1
            else:
                low = low + 1
        return res
