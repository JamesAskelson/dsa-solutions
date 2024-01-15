def setZeroes(self, matrix: List[List[int]]) -> None:
        rows = []
        cols = []

        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] == 0:
                    rows.append(i)
                    cols.append(j)

        for i in range(len(rows)):
            for j in range(len(matrix[0])):
                matrix[rows[i]][j] = 0


        for i in range(len(matrix)):
            for j in range(len(cols)):
                matrix[i][cols[j]] = 0

        return matrix
