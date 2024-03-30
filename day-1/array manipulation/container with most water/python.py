def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        max = 0
        while left < right:
            leftHeight = height[left]
            rightHeight = height[right]
            width = right - left
            if leftHeight > rightHeight:
                 lowerHeight = rightHeight
            else:
                 lowerHeight = leftHeight
            storedWater = width * lowerHeight

            if storedWater > max:
                max = storedWater
            else:
                max = max
            if lowerHeight == leftHeight:
                left += 1
            else:
                right -= 1
        return max

def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        max = 0
        while left < right:
            leftHeight = height[left]
            rightHeight = height[right]
            width = right - left

            lowerHeight = min(leftHeight, rightHeight)

            storedWater = width * lowerHeight

            if storedWater > max:
                max = storedWater

            if lowerHeight == leftHeight:
                left += 1
            else:
                right -= 1
        return max
