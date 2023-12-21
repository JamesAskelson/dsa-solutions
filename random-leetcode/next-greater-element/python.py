def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
    res = []
    for i in range(len(nums1)):
        found = -1
        curr = nums1[i]
        j = nums2.index(curr)
        k = j + 1
        while k < len(nums2):
            if nums2[k] > nums2[j]:
                found = nums2[k]
                break
            k+=1
        res.append(found)
    return res
