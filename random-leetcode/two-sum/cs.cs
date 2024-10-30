    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> prevs = new Dictionary<int, int>();
        for(int i = 0; i < nums.Length; i++){
            int curr = nums[i];
            int diff = target - curr;
            if(prevs.ContainsKey(diff)){
                return [prevs[diff], i];
            } else{
                prevs.Add(curr, i);
            }
        }
        return [];
    }
