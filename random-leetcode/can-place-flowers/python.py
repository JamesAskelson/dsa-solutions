def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if n == 0:
            return True
        for i in range(0, len(flowerbed)):
            curr = flowerbed[i]
            left = flowerbed[i-1] if i - 1 >= 0 else None
            right = flowerbed[i+1] if i + 1 < len(flowerbed) else None
            if curr == 0:
                if (left is None or left == 0) and (right is None or right == 0):
                    flowerbed[i] = 1
                    n -= 1
                    if n == 0:
                        return True
