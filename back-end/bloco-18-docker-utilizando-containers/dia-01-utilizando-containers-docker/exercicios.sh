
newgpr docker


echo "1)No Docker Hub, utilizando a caixa de busca (Search for great content), busque pela imagem da Distribuição Linux Debian"
# https://hub.docker.com/_/debian

echo "2)Uma vez que encontrar a imagem oficial, acesse-a (clicando em seu card) e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um contêiner para isso."
docker pull

echo "3) Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição."
docker pull debian:stable-slim

echo "4)Após baixar a imagem para seu computador local, crie e execute um contêiner no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag."
docker container run -it debian:stable-slim

echo "5) No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do contêiner."
#VERSION_ID="11"
#VERSION="11 (bullseye)"
#VERSION_CODENAME=bullseye
#ID=debian

echo "6) Encerre o terminal."
exit
clear

echo "7) Verifique na sua lista de contêiners qual contêiner se refere ao exercício que acabou de praticar."
docker container ls -a
#597e35a2a10e   debian:stable-slim   "bash"    2 minutes ago   Exited (0) 26 seconds ago  silly_bhabha


echo "8) Inicie o mesmo contêiner novamente, sem criar outro. Valide se ele está ativo na lista de contêiners."
docker start 597e35a2a10e
docker container ls

echo "9) Retome o contêiner que foi criado anteriormente neste exercício."
docker attach 597e35a2a10e

echo "10) Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do contêiner."
cat /etc/debian_version
#11.5

echo "11) Encerre o terminal."
exit

echo "12) Remova somente o contêiner criado para esse exercício."
docker container ls -a
docker rm 597

echo "13) Crie e rode de modo interativo em modo Cleanup, a imagem andrius/ascii-patrol."
docker container run -it --rm andrius/ascii-patrol
