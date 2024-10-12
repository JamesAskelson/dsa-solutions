public class Solution {
    public int MySqrt(int x) {
        int low = 0;
        int high = x;

        while(low <= high){
            int mid = (low + high) / 2;
            Console.WriteLine(mid);
            if(mid*mid > x){
                high = mid - 1;
            } else if(mid*mid < x){
                low = mid + 1;
            } else {
                return mid;
            }
        }
        return high;
    }
}
