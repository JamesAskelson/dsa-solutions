def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = []
        product = 1
        zeros = 0
        for i in range(0, len(nums)):
            if nums[i] != 0:
                product = product * nums[i]
            else:
                zeros = zeros + 1

        if zeros > 1:
            return [0 for val in nums]

        for i in range(0, len(nums)):
            if nums[i] == 0:
                res.append(product)
            elif zeros == 1:
                res.append(0)
            else:
                res.append(product // nums[i])
        return res
