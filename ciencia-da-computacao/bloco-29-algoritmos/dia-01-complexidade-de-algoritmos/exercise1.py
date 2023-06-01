def multiply_array(numbers):
    result = 1
    for number in numbers:
        result *= number

    return result


# Exercício 1: Qual é a Ordem de Complexidade (complexidade de tempo) do
# algoritmo abaixo? E a complexidade de espaço?

# A ordem de complexidade vai acompanhar o tamanho do array
# passado como parâmetro O(n).

# A complexidade de espaço será sempre 1 pois retorna apenas um número O(1).
