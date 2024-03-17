class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> pairs = new HashMap<>();

        for(int i = 0; i < nums.length; i++){
            int num = nums[i];
            int diff = target - num;
            if(pairs.containsKey(diff)){
                return new int[] {i, pairs.get(diff)};
            } else {
                pairs.put(num, i);
            }
        }
        return new int[] {};
    }
}
