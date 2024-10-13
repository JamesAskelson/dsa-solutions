if len(needle) == 0:
    return -1
i = 0
j = 0
while i < len(haystack):
    if haystack[i] == needle[j]:
        while j < len(needle):
            if haystack[i+j] == needle[j] and j+1 == len(needle):
                return i
            elif haystack[i+j] == needle[j]:
                j += 1
            else:
                j = 0
                break
    i += 1
return -1
