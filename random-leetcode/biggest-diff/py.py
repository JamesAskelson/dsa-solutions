def biggest_diff(nums):
  largest = nums[0]
  smallest = nums[0]

  for i in range(1, len(nums)):
    if nums[i] < smallest:
      smallest = nums[i]
    elif nums[i] > largest:
      largest = nums[i]
  return largest - smallest
