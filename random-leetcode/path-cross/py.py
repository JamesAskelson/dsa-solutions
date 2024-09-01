def ispath_cross(path):
    crossed = set([])
    current = [0,0]
    crossed.add(str(current))
    for curr in path:
        if curr == 'N':
            current[1] += 1
        elif curr == 'S':
            current[1] -= 1
        elif curr == 'E':
            current[0] += 1
        else:
            current[0] -= 1
        if str(current) in crossed:
            return True
        else:
            crossed.add(str(current))
    return False
