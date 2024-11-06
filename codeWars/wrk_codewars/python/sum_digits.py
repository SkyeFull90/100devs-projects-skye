def sum_digits(number):
  """Calculates the sum of the absolute value of each digit in a number.

  Args:
    number: The input integer.

  Returns:
    The sum of the absolute value of each digit.
  """

  # Convert the number to its absolute value
  number = abs(number)

  # Initialize a variable to store the sum
  digit_sum = 0

  # Iterate through each digit of the number
  while number > 0:
    # Extract the last digit
    digit = number % 10

    # Add the digit to the sum
    digit_sum += digit

    # Remove the last digit from the number
    number //= 10

  return digit_sum

# Example usage:
print(sum_digits(10))  # Output: 1
print(sum_digits(99))  # Output: 18
print(sum_digits(-32))  # Output: 5