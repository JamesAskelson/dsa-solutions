def lastStoneWeight(self, stones: List[int]) -> int:
    # Step 1: Negate the values of stones to simulate the smashing process
    stones = [-s for s in stones]

    # Step 2: Transform the list into a min heap
    heapq.heapify(stones)

    # Step 3: Continue until there is only one stone left
    while len(stones) > 1:
        # Step 4: Remove and get the largest stone
        first = heapq.heappop(stones)

        # Step 5: Remove and get the second largest stone
        second = heapq.heappop(stones)

        # Step 6: Check if there's a leftover piece after smashing stones
        if second > first:
            # Step 7: Calculate the leftover piece and add it back to the heap
            heapq.heappush(stones, first - second)

    # Step 8: Return the weight of the last remaining stone (or 0 if none)
    return abs(stones[0])
