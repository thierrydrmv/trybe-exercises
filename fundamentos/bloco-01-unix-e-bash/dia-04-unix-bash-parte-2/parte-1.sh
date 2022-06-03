clear

#Exercício 1
echo "1)Navegue até a pasta unix_tests;"

cd unix_tests

#Exercício 2
echo "2)Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha."

cat > skills2.txt
Internet
Unix
Bash

Ctrl + D

#Exercício 3
echo "3)Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓"

cat >> skills2.txt
Comunicacao
CSS
HTML
JavaScript
Colaboracao

sort skills2.txt

#Exercício 4
echo "4)Conte quantas linhas tem o arquivo skills2.txt."

wc -1 skills2.txt

#Exercício 5
echo "5)Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética."

cat skills2.txt | sort -d | head -3 > top_skills.txt

#Exercício 6
echo "6)Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha."

cat > phrases2.txt
hello world
hi planet
hola amigo
oi telecomunicacoes

Ctrl + D

#Exercício 7
echo "7)Conte o número de linhas que contêm as letras br."

grep br phrases2.txt | wc -l

#Exercício 8
echo "8)Conte o número de linhas que não contêm as letras br."

grep -v br phrases2.txt | wc -l

#Exercício 9
echo "9)Adicione dois nomes de países ao final do arquivo phrases2.txt."

cat >> phrases2.txt 
franca
brasil

ctrl + D

#Exercício 10
echo "10)Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt"

cat phrases2.txt countries.txt > bunch_of_things.txt

#Exercício 11
echo "11)Ordene o arquivo bunch_of_things.txt."

sort -o bunch_of_things.txt bunch_of_things.txt


clear
