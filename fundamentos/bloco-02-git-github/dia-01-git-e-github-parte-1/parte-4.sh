clear

#Exercício 1
echo "1)crie um arquivo .txt com um nome de sua escolha (Exemplo: trybe-skills.txt) ;"

cat > trybe-skills.txt
Unix
Bash
Git
Ctrl + D

echo "2)Agora vamos transformar essa pasta em um repositório Git:"
echo "Retorne para a raiz da pasta de exercícios;"

cd ..

echo "Inicialize o repositório com git init;"

git init

echo "Crie um arquivo de README utilizando o comando touch README.md;"

touch README.md

echo "Crie um commit inicial :"

git add .
git commit -m "Initial commit"
git push

