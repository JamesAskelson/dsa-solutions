    def climbStairs(self, n: int) -> int:
        one = 0
        two = 1
        for i in range(n):
            one, two = two, one + two
        return two
