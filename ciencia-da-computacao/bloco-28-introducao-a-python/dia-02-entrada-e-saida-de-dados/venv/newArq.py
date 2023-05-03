file = open(
    "people.txt", mode="w"
)  # ao abrir um arquivo para escrita, um novo arquivo
# é criado mesmo que ele já exista, sobrescrevendo o antigo.
# file = open("arquivo.txt", mode="w")

file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")

print("Thierry 25\n", file=file)

more_people = ["José 22\n", "Maria 70\n"]

file.writelines(more_people)
file.close()
# //////////////////////////////////////
# escrita
file = open("arquivo2.txt", mode="w")
file.write("Trybe S2")
file.close()

# leitura
file = open("arquivo2.txt", mode="r")
content = file.read()
print(content)
file.close()  # não podemos esquecer de fechar o arquivo

# escrita
file = open("arquivo.txt", mode="w")
LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
file.writelines(LINES)
file.close()

# leitura
file = open("arquivo.txt", mode="r")
for line in file:
    print(
        line
    )  # não esqueça que a quebra de linha também é um caractere da linha
file.close()  # não podemos esquecer de fechar o arquivo

# escrita
file = open("arquivo.dat", mode="wb")
file.write(
    b"C\xc3\xa1ssio 30"
)  # o prefixo b em uma string indica que seu valor está codificado em bytes
file.close()

# leitura
file = open("arquivo.dat", mode="rb")
content = file.read()
print(content)  # saída: b'C\xc3\xa1ssio 30'
file.close()  # não podemos esquecer de fechar o arquivo
