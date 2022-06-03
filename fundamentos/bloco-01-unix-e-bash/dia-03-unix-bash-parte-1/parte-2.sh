clear

#Exercício 1
echo "1)Na pasta unix_tests, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:"

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

#Exercício 2
echo "2)Mostre todo o conteúdo do arquivo countries.txt na tela."

cat countries.txt

#Exercício 3
echo "3)Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia."

less countries.txt

#Exercício 4
echo "4)Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia."

less countries.txt
/Zambia

#Exercício 5
echo "5)Busque por Brazil no countries.txt."

grep Brazil countries.txt

#Exercício 6
echo "6)Busque novamente por brazil, mas agora utilizando o lower case."

grep -i brazil countries.txt

echo "Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal."
cat > phrases.txt
good morning
brazil is the best
hello padawan
what does the fox say

Ctrl + D

#Exercício 7
echo "7)Busque pelas frases que não contenham a palavra fox."

grep fox -v phrases.txt

#Exercício 8
echo "8)Conte o número de palavras do arquivo phrases.txt."

wc -w phrases.txt

#Exercício 9
echo "9)Conte o número de linhas do arquivo phrases.txt."

wc -l phrases.txt

#Exercício 10
echo "10)Crie os arquivos empty.tbt e empty.pdf."

touch empty.tbt
touch empty.pdf

#Exercício 11
echo "11)Liste todos os arquivos do diretório unix_tests."

ls *unix_tests

#Exercício 12
echo "12)Liste todos os arquivos que terminem com txt."

ls *.txt

#Exercício 13
echo "13)Liste todos os arquivos que terminem com tbt ou txt."

ls *.tbt *.txt

#Exercício 14
echo "14)Acesse o manual do comando ls."

man ls

