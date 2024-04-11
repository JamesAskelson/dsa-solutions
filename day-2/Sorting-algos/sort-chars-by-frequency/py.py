def frequencySort(self, s: str) -> str:
        res = ''
        obj = {}
        for i in range(0, len(s)):
            if s[i] in obj:
                obj[s[i]] = obj[s[i]] + 1
            else:
                obj[s[i]] = 1

        for k,v in sorted(obj.items(), key=lambda item: item[1]):
            for i in range(v):
                res = res + k
        print(res)
        return res[::-1]
