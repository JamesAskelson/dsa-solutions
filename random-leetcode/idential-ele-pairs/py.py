def countIdenticalPairs(nums):
    count = 0
    pairs_dict = {}

    for num in nums:
        if pairs_dict[num]:
            count = count + 1
            pairs_dict[num] = pairs_dict[num] + 1
        else:
            pairs_dict[num] = 1
    return count
