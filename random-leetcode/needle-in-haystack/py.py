def findSubstringStart(haystack, needle):
# setup i and j as variables, i for incrementing through the haystack, j for incrementing through the needle when conditions are met
# setup while loop that iterates through haystack with i
# if haystack[i] == needle[j], you enter another while loop that stops if j < len(needle)
# if haystack[i+j] equal to needle[j] and if j+1 == len(needle), return i
# if haystack[i+j] equal to needle[j], increment j
# else, break out of this loop
# increment i
# outside of the while loop, return -1 if you never hit the conditionals inside to return i
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
