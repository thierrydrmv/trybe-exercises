
clear

#Exercício 1
echo "1)Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele."

mkdir unix_tests
cd unix_tests

#Exercício 2
echo "2)Crie um arquivo de texto com o nome trybe.txt."

touch trybe.txt

#Exercício 3
echo "3)Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt."

cp trybe.txt trybe_backup.txt

#Exercício 4
echo "4)Renomeie o arquivo trybe.txt."

mv trybe.txt trybeNew.txt

#Exercício 5
echo "5)Dentro de unix_tests, crie um novo diretório chamado backup."

mkdir backup

#Exercício 6
echo "6)Mova o arquivo trybe_backup.txt para o diretório backup."

mv trybe_backup.txt backup

#Exercício 7
echo "7)Dentro de unix_tests, crie um novo diretório chamado backup2."

mkdir backup2

#Exercício 8
echo "8)Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2."

cd backup
mv trybe_backup.txt ../backup2

#Exercício 9
echo "9)Apague a pasta backup."

cd ..
rmdir backup

#Exercício 10
echo "10)Renomeie a pasta backup2 para backup."

mv backup2 backup

#Exercício 11
echo "11)Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele."

pwd
ls

#Exercício 12
echo "12)Apague o diretório backup."

rm -rf backup

#Exercício 13
echo "13)Limpe o terminal."

clear

echo "Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt:"

cat > skills.txt

Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL

Ctrl + D

#Exercício 14
echo "14)Mostre na tela as 5 primeiras skills do arquivo skills.txt."

head -5 skills.txt

#Exercício 15
echo "15)Mostre na tela as 4 últimas skills do arquivo skills.txt."

tail -4 skills.txt

#Exercício 16
echo "16)Apague todos os arquivos que terminem em .txt."

rm *.txt

