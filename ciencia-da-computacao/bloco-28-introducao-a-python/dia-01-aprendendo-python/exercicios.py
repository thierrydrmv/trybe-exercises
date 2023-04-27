# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def bigger(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2


# print(bigger(1, 22))

# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def media(*values):
    counter = 0
    sum = 0
    for value in values:
        counter += 1
        sum += value
        print(sum)
    return sum / counter


# print(media(1, 8))

# 🚀 Exercício 3: Crie uma função que receba uma lista de nomes e retorne o
# nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas"
# , "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".


def biggerString(arrayStrings):
    biggerWord = ""
    for string in arrayStrings:
        if len(string) > len(biggerWord):
            biggerWord = string
    return biggerWord


print(biggerString(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
