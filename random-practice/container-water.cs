public class Solution {
    public int MaxArea(int[] height) {
        int Res = 0;
        int l = 0;
        int r = height.Length - 1;
        while(l < r){
            int lower = height[l] < height[r] ? height[l] : height[r];
            int CurrMax = lower * (r - l);
            if(CurrMax > Res){
                Res = CurrMax;
            }
            if(height[l] == lower){
                l += 1;
            } else{
                r -= 1;
            }
        }
        return Res;
    }
}
