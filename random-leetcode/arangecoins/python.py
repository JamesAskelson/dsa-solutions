def arrangeCoins(self, n: int) -> int:
        total = n
        sub = 1
        count = 0
        while total > 0:
            total = total - sub
            if total < 0:
                return count
            count = count + 1
            sub = sub + 1
        return count
