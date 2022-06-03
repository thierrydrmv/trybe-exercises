clear

#Exercício 1
echo "1)Navegue até a pasta unix_tests;"

cd unix_tests

#Exercício 2
echo "2)Rode o comando ls -l e veja quais as permissões dos arquivos;"

ls -l

#Exercício 3
echo "3)Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;"

chmod 666 bunch_of_things.txt
ls -l

#Exercício 4
echo "4)Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l;"

chmod 444 bunch_of_things.txt
ls -l

#Exercício 5
echo "5)Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt."

chmod 644 bunch_of_things.txt


clear
