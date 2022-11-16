#Criando a imagem

docker build -t mission .

#Buildando a imagem

docker run -d --name trybe -p 4545:80 mission

#Verificando a página web

localhost:4545/missao_trybe.html

#docker ps -- para colher o id

12df062528ba

#json do container

docker inspect 12df062528ba

# parando o container

docker stop 12df062528ba

# removendo o container

docker rm -f 12df062528ba

# removendo a imagem

docker rmi -f mission