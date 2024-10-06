    def maxArea(self, height: List[int]) -> int:
        low = 0
        high = len(height) - 1
        most_water = 0
        while low < high:
            dist = high - low
            lower_val = min(height[low], height[high])
            curr_max = lower_val*dist
            if curr_max > most_water:
                most_water = curr_max
            if lower_val == height[low]:
                low += 1
            else:
                high -= 1
        return most_water

    def maxArea(self, height: List[int]) -> int:
        low = 0
        high = len(height) - 1
        most_water = 0
        while low < high:
            dist = high - low
            lower_val = min(height[low], height[high])
            curr_max = lower_val*dist
            if curr_max > most_water:
                most_water = curr_max
            if lower_val == height[low]:
                low += 1
            else:
                high -= 1
        return most_water
