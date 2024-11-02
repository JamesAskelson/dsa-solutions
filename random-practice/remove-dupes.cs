    public int RemoveDuplicates(int[] nums) {
        int res = 1;
        for(int i = 1; i < nums.Length; i++){
            if(nums[i-1] != nums[i]){
                nums[res] = nums[i];
                res += 1;
            }
        }
        return res;
    }
