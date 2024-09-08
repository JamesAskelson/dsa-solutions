    def plusOne(self, digits: List[int]) -> List[int]:
        digits[-1] += 1
        i = len(digits) - 1
        while i >= 0 and digits[i] > 9:
            digits[i] -= 10
            if digits[i - 1] == None:
                digits.insert(0, 1)
                digits.insert(1,0)
            else:
                digits[i-1] += 1
            i -= 1
        return digits
