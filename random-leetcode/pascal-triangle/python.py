def generate(self, numRows: int) -> List[List[int]]:
    res = []
    for i in range(0, numRows):
        row = [0] * (i + 1)
        row[0] = 1
        row[i] = 1
        j = 1
        while j < i:
            row[j] = res[i - 1][j-1] + res[i - 1][j]
            j += 1
        res.append(row)
    return res
