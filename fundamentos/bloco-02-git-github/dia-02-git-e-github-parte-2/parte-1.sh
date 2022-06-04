clear

#Exercício 1
echo "1)Navegue até a raiz do projeto com o arquivo;"

cd teste/trybe-exercises

#Exercício 2
echo "2)Verifique se não existe nada sem commitar utilizando git status:"
echo "Caso exista algo, verifique se é necessário e faça o commit, ou remova-o"

git status
git add .
git commit -m "adicionando novo bloco de exercícios: git github"

#Exercício 3
echo "3)Crie uma nova branch com o nome trybe-skills-changes e faça checkout nela;"

git checkout -b trybe-skills-changes


#Exercício 4
echo "4)No arquivo .txt, ao final da lista de habilidades , adicione mais duas habilidades que serão desenvolvidas na Trybe:"

cat >> trybe-skills.txt
HTML
CSS
Ctrl + D

echo "Faça um git add nome-do-arquivo.extensao;"

git add trybe-skills.txt

echo "Agora um git commit -m Mensagem que você gostaria;"

git commit -m "Adicionando duas novas skills."

git push -u origin trybe-skills-changes

#Exercício 5
echo "5)Abra um Pull Request com uma descrição detalhada:"

# Contexto escrito na interface do Github.

#Exercício 6
echo "6)Retorne para a branch principal, main, com o comando: git checkout main;"

git checkout main

#Exercício 7

echo "7)Verifique que você está na branch master, com o comando: git branch (esta branch deve estar com o formato original, sem as habilidades recém adicionadas);"

git branch

#Exercício 8

echo "8)Crie uma nova branch trybe-skills-updates a partir da master e faça checkout nela;"

git checkout -b trybe-skills-updates

#Exercício 9

echo "9)No mesmo arquivo .txt que você modificou no passo 4, também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos:"

cat >> trybe-skills.txt
JavaScript
Ctrl + D

git add trybe-skills.txt
git commit -m "adicionando mais uma skill"
git push -d origin trybe-skills-updates

#Exercício 10

echo "10)Agora, faça o merge das branches trybe-skills-changes e trybe-skills-updates na branch master, através do Pull Request:"

# Resolvido na interface do Github.

