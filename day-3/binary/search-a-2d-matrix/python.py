def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        num_rows = len(matrix)
        num_cols = len(matrix[0])
        low = 0
        high = num_rows * num_cols - 1

        while low <= high:
            mid = math.floor((low + high) / 2)
            row = math.floor(mid / num_cols)
            col = mid % num_cols
            curr = matrix[row][col]
            print(curr, target)
            if curr == target:
                return True
            elif curr > target:
                high = high - 1
            else:
                low = low + 1
        return False
