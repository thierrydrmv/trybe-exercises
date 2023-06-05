# 🚀 Exercício 1:
# Crie um algoritmo não recursivo para contar quantos números pares
# existem em uma sequência numérica (1 a n).


def counter(n):
    total = 0
    while n > 0:
        if n % 2 == 0:
            total += 1
        n = n - 1
    print(total)


counter(22)
