# import random

# random_number = random.randint(1, 10)
# guess = ""

# while guess != random_number:
#     guess = int(input("Qual o seu palpite? "))

# print("O número sorteado era: ", guess)

# 1. Faça um programa que solicite o nome de uma pessoa
# usuária e imprima-o na vertical. Exemplo:

# name = input("Nome da pessoa? ")

# for n in name:
#     print(n)


# 2. Escreva um programa que receba vários números naturais e
# calcule a soma desses valores. Caso algum valor da entrada seja
#  inválido (por exemplo uma letra), uma mensagem deve ser exibida na
#  saída de erros no seguinte formato: “Erro ao somar valores, {valor}
# é um valor inválido”. Ao final, você deve imprimir a soma dos valores
# válidos.

# nums = input("Insira valores aqui, separados por espaço: ")

# nums_arr = nums.split(" ")

# sum = 0
# for num in nums_arr:
#     if not num.isdigit():
#         print(f"Erro ao somar valores, {num} não é um dígito.")
#     else:
#         sum += int(num)

# print(f"A soma dos valores válidos é: {sum}")

# a, b = "cd"
# print(a)  # saída: c
# print(b)  # saída: d

# head, *tail = (
#     1,
#     2,
#     3,
# )  # Quando um * está presente no desempacotamento, os valores são
# desempacotados em formato de lista.
# print(head)  # saída: 1
# print(tail)  # saída: [2, 3]

a, b, *c = 1, 2, 3, 4


print(a)
print(b)
print(c)
