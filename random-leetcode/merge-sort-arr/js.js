var merge = function(nums1, m, nums2, n) {
    let ptr1 = nums1.length - n;
    let ptr2 = 0
    while(ptr1 < nums1.length){
        nums1[ptr1] = nums2[ptr2]
        ptr1++
        ptr2++
    }

    return nums1.sort((a,b) => a - b)
};
