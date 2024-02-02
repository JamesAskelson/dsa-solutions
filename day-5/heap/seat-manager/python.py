import heapq

class SeatManager:

    def __init__(self, n: int):
        # Step 1: Initialize the SeatManager with a list of unreserved seat numbers from 1 to n
        self.unreserved = [i for i in range(1, n+1)]

    def reserve(self) -> int:
        # Step 2: Reserve the smallest available seat number and remove it from the list
        return heapq.heappop(self.unreserved)

    def unreserve(self, seatNumber: int) -> None:
        # Step 3: Add the unreserved seat number back to the list
        return heapq.heappush(self.unreserved, seatNumber)
