import random


def random_averages(n):
    list_of_averages = []

    for number in range(100):
        average = 0
        for number in range(n):
            average += random.randrange(1, n)
        average = average / n
        list_of_averages.append(average)

    return list_of_averages


print(random_averages(11))

# Complexidade de tempo O(n), e complexidade de espaço O(1)
