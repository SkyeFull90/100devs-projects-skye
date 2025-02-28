def sum_array(arr):
    """
    Sums all the numbers in the array except the highest and lowest values.

    :param arr: List of numbers
    :return: Sum of the array excluding the highest and lowest values, or 0 if input is invalid or has insufficient elements.
    """
    # Input validation
    if not isinstance(arr, list) or len(arr) < 3:  # Must be a list with at least 3 elements
        return 0

    # Remove the highest and lowest element and sum the rest
    return sum(arr) - min(arr) - max(arr)


# Example usage
print(sum_array([6, 2, 1, 8, 10]))  # Output: 16 (6 + 2 + 8)
print(sum_array([1, 1, 11, 2, 3]))  # Output: 6 (2 + 3 + 1)
print(sum_array([1]))  # Output: 0 (invalid input)
print(sum_array([]))  # Output: 0 (invalid input)