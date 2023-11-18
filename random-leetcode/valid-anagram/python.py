def isAnagram(self, s: str, t: str) -> bool:
        sSet = list(s)
        tSet = list(t)
        sSet.sort()
        tSet.sort()
        sOrdered = str(sSet)
        tOrdered = str(tSet)
        if sOrdered == tOrdered:
            return True
        return False
