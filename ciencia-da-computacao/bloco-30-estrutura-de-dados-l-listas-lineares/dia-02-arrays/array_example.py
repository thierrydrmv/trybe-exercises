import sys

"""Perceba que temos uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""


class ListaArray:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        # recupera o elemento no índice informado
        return self.data[index]

    def set(self, index, value):
        # insere um elemento no índice informado
        self.data.insert(index, value)

    def remove(self, index):
        # removeremos o item, retornando-o
        return self.data.pop(index)

    def update(self, index, value):
        if len(self.data) > index:
            self.data[index] = value


# vamos inicializar e preencher uma estrutura de dados array
array = ListaArray()
array.set(0, "Felipe")
array.set(1, "Ana")
print(array)

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)


array.set(2, "Shirley")
array.set(3, "Miguel")

print(array)

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

array.set(4, "Robert")
array.set(5, "Bruno")

print(array)

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

array.set(0, "Miguel")

print(array)

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

array.remove(0)
print(array)

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

array.update(2, "Bob")

print(array)

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)


# para acessar um elemento do array, utilizamos seu índice
print(array.get(0))  # saída: Felipe
print(array.get(2))  # saída: Shirley
print("-----")

# podemos iterar sobre seus elementos da seguinte maneira
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1
