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
