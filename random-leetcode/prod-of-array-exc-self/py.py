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

    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = []
        cur = 0
        count = len(nums)
        while count > 0:
            curr = nums.pop(0)
            val = math.prod(nums)
            res.append(val)
            nums.append(curr)
            count = count - 1
        return res

    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = []
        curr = 0
        for i in range(len(nums)):
            curr = nums[i]
            if nums[i] != 1:
                nums[i] = 1
            val = math.prod(nums)
            res.append(val)
            nums[i] = curr

        return res
