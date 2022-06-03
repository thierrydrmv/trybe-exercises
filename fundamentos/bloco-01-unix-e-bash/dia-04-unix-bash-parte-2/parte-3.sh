clear

#Exercício 1
echo "1)Liste todos os processos;;"

ps

#Exercício 2
echo "2)Agora use o comando sleep 30 & ;"

sleep 30 &

#Exercício 3
echo "3)Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo);"

ps
kill 11817

#Exercício 4
echo "4)Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background;"

sleep 30
Ctrl + Z
bg

#Exercício 5
echo "5)Crie um processo em background que rode o comando sleep por 300 segundos."

sleep 300 &

#Exercício 6
echo "6)Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente."

sleep 200
sleep 100

#Exercício 7
echo "7)Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo."

jobs
kill %4

#Exercício 8
echo "8)Retome a execução do processo sleep 100 em background com o comando bg."

bg 6

#Exercício 9
echo "9)Termine a execução de todos os processos sleep (mate os processos)."

kill %1 %2 %6
