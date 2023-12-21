var nextGreaterElement = function(nums1, nums2) {
    let res = []
    for(let i = 0; i < nums1.length; i++){
        let found = -1;
        let curr = nums1[i]
        let j = nums2.indexOf(curr)
        for(let k = j+1; k < nums2.length; k++){
            if(nums2[k] > nums2[j]){
                found = nums2[k]
                break;
            }
        }
        res.push(found)
    }
    return res
};
