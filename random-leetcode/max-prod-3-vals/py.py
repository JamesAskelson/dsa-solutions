    def maximumProduct(self, nums: List[int]) -> int:
        sorted_Nums = sorted(nums)
        i = len(nums) - 1
        print(sorted_Nums)
        if sorted_Nums[0] < 0 and sorted_Nums[1] < 0 and sorted_Nums[i] > -1:
            return sorted_Nums[0] * sorted_Nums[1] * sorted_Nums[i]
        else:
            return sorted_Nums[i-2] * sorted_Nums[i-1] * sorted_Nums[i]
