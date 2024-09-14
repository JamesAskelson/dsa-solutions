    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        pairs = {nums[0]:0}
        print(pairs)

        for i in range(1, len(nums)):
            if nums[i] in pairs and (abs(i) - abs(pairs[nums[i]])) <= k:
                return True
            else:
                pairs[nums[i]] = i
        return False
