def reverse_number(num):
  # Reverse the number
    string = str(num)
    reverse = string[::-1]
  # Return the number

    return int(reverse)

## Example usage:
print(reverse_number(1223)) # Output: 3221
print(reverse_number(987654321)) # Output: 123456789
