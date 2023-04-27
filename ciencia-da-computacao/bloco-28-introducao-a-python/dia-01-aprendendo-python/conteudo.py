# Exercício 1:
# No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. Mostre o
# resultado das 7 operações básicas (soma, subtração, multiplicação, divisão,
# divisão inteira, potenciação e módulo) envolvendo essas variáveis.
# a = 10
# b = 5
# print(a + b)
# print(a - b)
# print(a * b)
# print(a / b)
# print(a // b)
# print(a**b)
# print(a % b)

# print("---------------")

# Exercício 2:
# Declare e inicialize uma variável: hours = 6. Quantos minutos têm em 6 horas?
#  E quantos segundos? Declare e inicialize variáveis minutes e seconds que
# recebem os respectivos resultados das contas. Depois, imprima cada uma delas.
# hours = 6

# minutes = hours * 60
# seconds = hours * 60 * 60
# print(minutes)
# print(seconds)

# print("---------------")

# Exercício 3:
# Teste e verifique o que acontece se você colocar um ponto e vírgula no final
# de uma instrução em Python.

# print("oi")

# print("---------------")

# Exercício 4:
# Suponha que o preço de capa de um livro seja R$ 24,20, mas as livrarias
# recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar
# e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado
# para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.

# quantidade = 60

# totalValue = (24.2 * 0.6) * quantidade
# print(totalValue)

# if quantidade > 0:
#     totalValue += 3
#     totalValue += (quantidade - 1) * 0.75


# print(totalValue)

# a = 5
# b = 5.2
# c = "a"
# print(type(a))
# print(type(b))
# print(type(c))

# trybe_course = ["Introdução", "Front-end", "Back-end"]

# Exercício 5
# Adicione o elemento “Ciência da Computação” à lista.
# trybe_course.append("Ciência da Computação")
# print(trybe_course)

# Exercício 6
# Acesse e altere o primeiro elemento da lista para “Fundamentos”.

# trybe_course[0] = "Fundamentos"

# print(trybe_course)

user = ("Will", "Marcondes", 42)
# elementos são definidos separado por vírgula, envolvidos por parênteses

# acesso também por índices
user[0]

# elementos separados por vírgula, envolvidos por chaves
permissions = {"member", "group"}

# adiciona um novo elemento ao conjunto
permissions.add("root")

# como o elemento já existe, nenhum novo item é adicionado ao conjunto
permissions.add("member")

# retorna um conjunto resultado da união
permissions.union({"user"})

# retorna um conjunto resultante da intersecção dos conjuntos
permissions.intersection({"user", "member"})

# retorna a diferença entre os dois conjuntos
permissions.difference({"user"})


# Exercício 7
# Um conjunto ou set pode ser inicializado utilizando-se também o método set().
# Inicialize uma variável com essa função var = set() e adicione seu nome ao
# conjunto utilizando um dos métodos vistos acima. Depois, imprima a variável
# e confira se o retorno é: {‘seu_nome’}.

setando = set()
setando.add("bob")

# print(setando)


# assim como o set, qualquer estrutura iterável pode ser
#  utilizada para criar um frozenset
permissions = frozenset(["member", "group"])

# print(permissions)

# novos conjuntos imutáveis podem ser criados à partir
# do original, mas o mesmo não pode ser modificado
permissions.union({"user"})

# retorna um conjunto resultante da intersecção dos conjuntos
permissions.intersection({"user", "member"})

# retorna a diferença entre os dois conjuntos
permissions.difference({"user"})


# elementos no formato "chave: valor" separados por vírgula,
# envolvidos por chaves
people_by_id = {1: "Maria", 2: "Fernanda", 3: "Felipe"}

# outro exemplo, dessa vez usando strings como chaves. As aspas
# são necessárias para que o Python não ache que `Maria`,
# `Fernanda` e `Felipe` sejam variáveis.
people_by_name = {"Maria": 1, "Fernanda": 2, "Felipe": 3}

# elementos são acessados por suas chaves
people_by_id[1]  # saída: Maria

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
people_by_id.items()  # dict_items([(2, "Fernanda"), (3, "Felipe")])
# é retornada uma coleção iterável de tuplas contendo chaves e valores


info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# Exercício 8
# Insira no objeto uma nova propriedade com o nome de chave “recorrente”
# e o valor “Sim”. Em seguida, imprima o objeto no console.

info["recorrente"] = "Sim"

# Exercício 9
# Remova a propriedade cuja chave é “origem” e imprima o objeto no console.

del info["origem"]
print(info)


# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
a = list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
b = list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
c = list(range(1, 11, 2))  # saída: [1, 3, 5, 7, 9]

# podemos utilizar valores negativos para as entradas também
d = list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

# print(d)


# Exercício 10
# Após uma consulta do banco de dados, temos linhas que contém nome,
# sobrenome e idade como: "Thiago", "Nobre", 29. Que estrutura vista
# anteriormente seria recomendada dado que após esta consulta somente
# exibimos estes valores? TUPLA

person = ("Thiago", "Nobre", 29)

# print(person)

# Exercício 11
# Realizar a contagem de quantas vezes cada elemento aparece em uma
# sequência é uma técnica muito útil na solução de alguns problemas.
# Qual é a estrutura mais recomendada para o armazenamento desta contagem? Dict

array = [20, 20, 1, 2]

dict = {}

for item in array:
    if item in dict:
        dict[item] += 1
    else:
        dict[item] = 1

# for key, valor in dict.items():
#     print(f"{key} : {valor}")


# salary = int(input("Qual o seu salário? "))
salary = 1

position = ""
if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:
    position = "líder"

# print(position)


restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

print(restaurants[0])

# criando uma lista com o if
min_rating = 3.0
filtered_restaurants = [
    restaurant for restaurant in restaurants if restaurant["nota"] > min_rating
]

# criando uma lista só com os nomes
# filtered_restaurants = [
#     restaurant["name"]
#     for restaurant in restaurants
#     if restaurant["nota"] > min_rating
# ]
# print(filtered_restaurants)


# for index in range(5):
#     print(index)

names_list = ["Duda", "Rafa", "Cris", "Yuri"]
new_names_list = [name for name in names_list if "a" in name]

# Aqui o for percorre cada nome em "names_list", verifica se existe a
# letra "a" nele,
# o adiciona à variável "name", e então gera nossa nova lista "new_names_list"
print(new_names_list)

quadrados = [x * x for x in range(11)]
print(quadrados)

languages = ["Python", "Java", "JavaScript"]

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
# print(list(enumerate_prime))

languages = ["Python", "Java", "JavaScript"]

# for index, language in enumerate(["Python", "Java"]):
#     print(f"{index} - {language}")

# n = 10
# last, next = 0, 1
# while last < n:
#     print(last)
#     last, next = next, last + next

# Exercício 12
# O Fatorial de um número inteiro é representado pela multiplicação de todos
#  os números predecessores maiores que 0. Por exemplo, o fatorial de 5 é 120
#  pois 5! = 1 * 2 * 3 * 4 * 5. Escreva um código que calcule o fatorial de
# um número inteiro.

fatorial = 1
numero = 5
while numero > 0:
    fatorial = fatorial * numero
    numero = numero - 1
print(fatorial)

# Exercício 13
# Um sistema de avaliações registra valores de 0 a 10 para cada avaliação.
# Após algumas mudanças estes valores precisam ser ajustados para avaliações
# de 0 a 100. Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10].
# Escreva um código capaz de gerar as avaliações após a mudança. Neste caso o
# resultado deveria ser [60, 80, 50, 90, 100].

ratings = [6, 8, 5, 9, 10]
adjusted_ratings = [rating * 10 for rating in ratings]

print(adjusted_ratings)

# Exercício 14
# Percorra a lista do exercício 13 e imprima “Múltiplo de 3” se o elemento
# for divisível por 3.

for rating in adjusted_ratings:
    if rating % 3 == 0:
        print(f"{rating} é multiplo de 3")


def sum(num1, num2):
    return num1 + num2


# posicionada
print(sum(12, 1))

# nomeada
print(sum(num1=14, num2=1))


def concat(*strings):
    # Equivalente a um ", ".join(strings), que concatena os
    # elementos de um iterável em uma string utilizando um separador
    # Nesse caso a string resultante estaria separada por vírgula
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ", "
    return final_string


# pode ser chamado com 2 parâmetros
concat("Carlos", "Cristina")  # saída: "Carlos, Cristina"

# pode ser chamado com um número n de parâmetros
concat("Carlos", "Cristina", "Maria")  # saída: "Carlos, Cristina, Maria"
