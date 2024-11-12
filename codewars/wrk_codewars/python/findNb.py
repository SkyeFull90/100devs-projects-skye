def findNum(m):
    total_volume = 0
    n = 0
    while total_volume < m:
        n += 1
        total_volume += n**3
    if total_volume == m:
        return n
    else:
        return -1

# Example usage:
print(findNum(1071225)) # Output: 45
print(findNum(91716553919377)) # Output: -1
