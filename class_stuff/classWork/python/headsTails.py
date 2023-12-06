import random


def headtails():
    return random.randint(0, 1)


def main():
    num = int(input("How many times would you like to flip the coin? "))
    heads = 0
    tails = 0
    for i in range(num):
        if headtails() == 0:
            heads += 1
        else:
            tails += 1
    print("You flipped heads", heads, "times and tails", tails, "times.")


if __name__ == '__main__':
    main()
