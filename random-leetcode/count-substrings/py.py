    def countSubstrings(self, s: str) -> int:
        length = len(s)
        count = 0
        def palinCheck(low, high):
            if low >= 0 and high <= len(s) and s[low] == s[high]:
                low += 1
                high -= 1
                if low == high or low > high:
                    return True
            return False

        for i in range(len(s)):
            for j in range(i, len(s)):
                if palinCheck(i,j):
                    count += 1
        return count
