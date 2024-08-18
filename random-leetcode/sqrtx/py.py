    def mySqrt(self, x: int) -> int:
        low = 0
        high = x
        while low <= high:

            mid = (low+high)//2
            print(mid)
            if mid*mid > x:
                high = mid - 1
            elif mid*mid < x:
                low = mid + 1
            else:
                return mid
