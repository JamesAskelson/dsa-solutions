def lengthOfLastWord(self, s: str) -> int:
    s_strip = s.strip().split(' ')
    res = s_strip.pop()
    return len(res)

def lengthOfLastWord(self, s: str) -> int:
    s_strip = s.strip().split(' ')
    res = s_strip[-1]
    return len(res)
