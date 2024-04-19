def search(self, nums: List[int], target: int) -> int:
        mini = 0
        maxi = len(nums) - 1
        while mini <= maxi:
            mid = math.ceil((mini+maxi) // 2)
            if nums[mid] == target:
                return mid
            if nums[mid] > target:
                maxi = maxi - 1
            else:
                mini = mini + 1
        return -1
