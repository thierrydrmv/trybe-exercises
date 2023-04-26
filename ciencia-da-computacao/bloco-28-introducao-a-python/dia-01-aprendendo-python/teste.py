# fast_foods = ["MC", "Subway", "Burguer King"]

# for fastfood in fast_foods:
# print(fastfood[1])

# idade = int(input("Quantos anos você têm? "))

# if idade == 18:
#     print("Você têm 18 anos")
# elif idade > 18:
#     print("Você é maior de idade")
# else:
#     print("Você é menor de idade")

# aspas triplas escreve igual foi passado

# example = """
# azul
# é
# a
# cor
# do
# mar"""

# print(example)


def analyze(text):
    # report = ""
    count_words = len(text.split(" "))
    count_length = len(text)
    return f"""Número de palavras: {count_words}
    Número de letras: {count_length}
    soma de ambos {count_words + count_length}"""


text_to_analyze = "Codego " "grande " "para " "ser " "contado."

print(analyze(text_to_analyze))
