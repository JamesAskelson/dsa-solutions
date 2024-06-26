def sortArray(self, nums: List[int]) -> List[int]:
        if len(nums) < 2: return nums

        mid = len(nums) // 2
        left = nums[0:mid]
        right = nums[mid::]
        return merge(self.sortArray(left), self.sortArray(right))

def merge(left, right):
        merged = []
        i = 0
        j = 0
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                merged.append(left[i])
                i = i + 1
            else:
                merged.append(right[j])
                j = j + 1
        while i < len(left):
            merged.append(left[i])
            i = i + 1
        while j < len(right):
            merged.append(right[j])
            j = j + 1

        return merged
