def optimalScoreRangeFinder(nums, k):


    # Write your plan below
    # set up minimum variable, setting it to float('inf')
    # sort the nums with sorted(nums) so you can effectively find the minimum difference easier
    # set two pointers, l at 0 and r at k-1, k-1 being the proper value for the end of the subset due to indexing
    # create a while loop, with the condition of r < len(nums)
    # insdie while loop, create diff variable that is nums[r] - nums[l]
    # if diff is less than minumum, set minimum to diff
    # after checking for each iteration, +1 both l and r
    # after iterating all the way through, return minimum


    # Write your code below
    if k == 1 or len(nums) < 2:
        return 0
    minimum = float('inf')
    nums = sorted(nums)
    l, r = 0, k-1
    while r < len(nums):
        diff = nums[r] - nums[l]
        if diff < minimum:
            minimum = diff
        l, r = l+1, r+1
    return minimum


print(optimalScoreRangeFinder([1,2,3], 2))
print(optimalScoreRangeFinder([9,4,1,7], 3)) 
