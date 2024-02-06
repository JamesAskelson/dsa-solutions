import heapq

class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        # Initialize the class attributes: minHeap to store the k largest elements,
        # and k to store the value of k.
        self.minHeap, self.k = nums, k

        # Convert the input nums list into a min-heap.
        heapq.heapify(self.minHeap)

        # If the length of the minHeap is greater than k,
        # pop elements from the minHeap until its size becomes k.
        while len(self.minHeap) > k:
            heapq.heappop(self.minHeap)

    def add(self, val: int) -> int:
        # Push the new value into the minHeap.
        heapq.heappush(self.minHeap, val)

        # If the size of the minHeap exceeds k after adding the new value,
        # remove the smallest element (root) from the minHeap.
        if self.k < len(self.minHeap):
            heapq.heappop(self.minHeap)

        # Return the smallest element (root) of the minHeap,
        # which represents the kth largest element.
        return self.minHeap[0]
