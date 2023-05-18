from exercicio1 import arrayList


def teste_array_com_o_numero_divisivel_por_tres():
    assert arrayList([1, 2, 3]) == [1, 2, "Fizz"]


def teste_array_com_o_numero_divisivel_por_cinco():
    assert arrayList([1, 2, 5]) == [1, 2, "Buzz"]


def teste_array_com_o_numero_divisivel_por_tres_e_cinco():
    assert arrayList([3, 5]) == ["Fizz", "Buzz"]


def teste_array_com_o_numero_divisivel_por_tres_cinco_e_ambos():
    assert arrayList([3, 5, 15]) == ["Fizz", "Buzz", "FizzBuzz"]
