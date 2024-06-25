def canAttendAllMeetings(intervals):
    intervals = intervals.sort(key = lambda i: i[0])
    for i in range(1, len(intervals)):
        curr = intervals[i-1]
        nxt = intervals[i]
        if curr[1] > nxt[0]:
            return False
    return True
