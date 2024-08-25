def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        res = []
        for val in nums:
            print(val)
            if val in count:
                count[val] = count[val] + 1
            else:
                count[val] = 1
        countarr = list(count.items())
        countarr.sort(key=lambda x: x[1], reverse=True)
        print(countarr)

        for i in range(0, k):
            res.append(countarr[i][0])

        return res

def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counter = {}
        res = []
        for val in nums:
            if val in counter:
                counter[val] = counter[val] + 1
            else:
                counter[val] = 1
        countarr = list(counter.items())
        countarr.sort(key=lambda x: x[1], reverse=True)
        print(countarr)

        for i in range(0, k):
            res.append(countarr[i][0])

        return res
