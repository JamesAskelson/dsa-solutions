    def threeSum(self, nums: List[int]) -> List[List[int]]:
        dupe = set([])
        res = []
        nums.sort()
        # [-4,-1,-1,0,1,2]
        for low in range(len(nums)):
            mid = low + 1
            high = len(nums) - 1

            while mid < high:
                total = nums[low] + nums[mid] + nums[high]

                if total == 0 and (nums[low], nums[mid], nums[high]) not in dupe:
                    dupe.add((nums[low], nums[mid], nums[high]))
                    res.append([nums[low], nums[mid], nums[high]])
                elif total > 0:
                    high -= 1
                else:
                    mid += 1


        return res
