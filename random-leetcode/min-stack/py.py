class MinStack:

    def __init__(self):
        self.stack = []

    def push(self, val: int) -> None:
        self.stack.append(val)

    def pop(self) -> None:
        self.stack.pop()

    def top(self) -> int:
        return self.stack[len(self.stack) - 1]

    def getMin(self) -> int:
        min = -10000
        for i in range(len(self.stack)):
            curr = self.stack[i]
            if curr < min or i == 0:
                min = curr
        return min
