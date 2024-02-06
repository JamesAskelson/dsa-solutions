def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        new_set = set()

        def backtrack(curr, index):
            total = 0
            if index >= len(candidates):
                return

            total = sum(curr)
            print(curr, total, index)
            if total == target and tuple(curr) not in new_set:
                res.append(curr[:])
                new_set.add(tuple(curr))

            if total <= target and index < len(candidates):
                backtrack(curr + [candidates[index]], index)
            backtrack(curr, index+1)

        backtrack([], 0)
        return res
