def merge (intervals):
    if not intervals or len(intervals) == 0:
        return []

    merged = []
    intervals.sort()
    mergedInt = intervals[0]

    for i in range(1, len(intervals)):
        interval = intervals[i]
        if interval[0] <= mergedInt[1]:
            mergedInt[1] = max(mergedInt[1], interval[1])
        else:
            merged.append(mergedInt)
            mergedInt = interval

    merged.append(mergedInt)

    return merged


print(merge([[1,4],[0,4]]))

def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        res = []
        intervals.sort()
        merger = intervals[0]

        for i in range(1, len(intervals)):
            if merger[1] >= intervals[i][0]:
                merger[1] = max(merger[1], intervals[i][1])
            else:
                res.append(merger)
                merger = intervals[i]
        res.append(merger)
        return res
