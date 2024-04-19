def minEatingSpeed(self, piles: List[int], h: int) -> int:
        minimum = 1
        maximum = max(piles)
        best = maximum
        while minimum < maximum:
            mid = math.floor((minimum+maximum) // 2)
            if self.time(mid, piles) <= h:
                best = mid
                maximum = mid - 1
            else:
                minimum = mid + 1
        return best

    def time(self, speed, piles):
        return reduce(lambda sum, pile: sum + math.ceil(pile / speed), piles, 0)
