# 🚀 Exercício 2:
# Transforme o algoritmo criado no exercicio1 em recursivo.


def counter(n):
    if n == 0:
        return 0
    if n % 2 == 0:
        return 1 + counter(n - 1)
    return counter(n - 1)


print(counter(22))
