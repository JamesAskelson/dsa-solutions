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

def sum78(nums):
  max_total = 0
  inside = False

  for num in nums:
    if num == 7:
      inside = True
    elif inside == False:
      max_total  = max_total  + num
    elif inside == True and num == 8:
      inside = False
  return max_total
