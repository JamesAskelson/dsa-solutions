def sum78(nums):
  max_sum = 0
  inside = False

  for num in nums:
    if num == 7:
      inside = True
    elif inside == False:
      max_sum = max_sum + num
    elif inside == True and num == 8:
      inside = False
  return max_sum
