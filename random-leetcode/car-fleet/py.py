def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        combo = [[car, velo] for car, velo in zip(position, speed)]
        sortd = sorted(combo)
        stack = []
        print(sortd)
        for value in sortd:
            pos = value[0]
            speed = value[1]
            time = ((target - pos) / speed)
            stack.append(time)
            if len(stack) >= 2:
                if stack[len(stack) - 2] <= stack[len(stack) - 1]:
                    stack.pop(len(stack) - 2)
        return len(stack)
