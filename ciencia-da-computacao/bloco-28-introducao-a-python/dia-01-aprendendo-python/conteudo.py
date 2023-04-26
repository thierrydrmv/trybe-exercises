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

print(d)


# Exercício 10
# Após uma consulta do banco de dados, temos linhas que contém nome,
# sobrenome e idade como: "Thiago", "Nobre", 29. Que estrutura vista
# anteriormente seria recomendada dado que após esta consulta somente
# exibimos estes valores? TUPLA

person = ("Thiago", "Nobre", 29)

print(person)

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

for key, valor in dict.items():
    print(f"{key} : {valor}")
