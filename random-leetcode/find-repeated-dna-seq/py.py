def findRepeatedDnaSequences(self, s: str) -> List[str]:
        sequences = set()
        res = []
        left = 0
        right = 10
        while right <= len(s):
            sub_seq = s[left:right]
            if sub_seq in sequences and sub_seq not in res:
                res.append(sub_seq)
            else:
                sequences.add(sub_seq)
            left = left + 1
            right = right + 1
        return res
