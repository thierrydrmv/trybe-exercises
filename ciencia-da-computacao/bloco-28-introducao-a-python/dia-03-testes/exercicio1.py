# 🚀 Exercício 1: Escreva um programa que retorne uma lista com os valores
# numéricos de 1 a N, mas com as seguintes exceções:

# Números divisíveis por 3 deve aparecer como “Fizz” ao invés do número;

# Números divisíveis por 5 devem aparecer como “Buzz” ao invés do número;

# Números divisíveis por 3 e 5 devem aparecer como “FizzBuzz” ao invés do
# número.


def arrayList(array):
    newArray = []
    for item in array:
        if item % 5 == 0 and item % 3 == 0:
            newArray.append("FizzBuzz")
        elif item % 3 == 0:
            newArray.append("Fizz")
        elif item % 5 == 0:
            newArray.append("Buzz")
        else:
            newArray.append(item)
    return newArray


# print(arrayList([1, 2, 3, 4, 5, 6, 15]))
