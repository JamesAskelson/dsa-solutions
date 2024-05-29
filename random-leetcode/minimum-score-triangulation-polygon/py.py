class Solution:
    def minScoreTriangulation(self, values: List[int]) -> int:
        def dfs(i, j):
            if j - i < 2:
                return 0
            minimum = float('inf')
            k = i + 1
            while k < j:
                total = values[i]*values[k]*values[j] + dfs(i,k) + dfs(k,j)
                minimum = min(minimum, total)
                k=k+1
            return minimum

        return dfs(0, len(values) - 1)
