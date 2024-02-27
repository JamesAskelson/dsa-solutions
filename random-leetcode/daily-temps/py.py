def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = []
        res = [0 for x in range(len(temperatures))]
        for i in range(len(temperatures)):
            temp = temperatures[i]

            while(len(stack) > 0 and stack[len(stack) - 1][0] < temp):
                [te, index] = stack.pop()
                diff = i - index
                print(stack, te, index, diff)
                res[index] = diff

            stack.append([temp, i])
        return res
