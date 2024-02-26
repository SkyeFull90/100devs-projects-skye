def order(sentence):
    # Step 1: Split the input string into words
    words = sentence.split()

    # Step 2: Sort the words based on the digit they contain
    words.sort(key=lambda word: sorted(word))

    # Step 3: Join the sorted words into a string
    sentence = ' '.join(words)

    # Step 4: Return the sorted string
    return sentence