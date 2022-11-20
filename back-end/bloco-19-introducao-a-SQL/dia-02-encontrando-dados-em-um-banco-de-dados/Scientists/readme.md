
-- Exclui o banco de dados Scientists caso já exista
```
DROP SCHEMA IF EXISTS Scientists;
```
-- Cria o banco Scientists
```
CREATE SCHEMA Scientists;
USE Scientists;
```

-- Cria a tabela Scientists
```
CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);
```
-- Cria a tabela Projects
```
CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);
```
-- Cria a tabela AssignedTo
```
CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);
```

-- Insere valores na tabela Scientists
```
INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');
```
-- Insere valores na tabela Projects
```
 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);
```
-- Insere valores na tabela AssignedTo
```
 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
  ```
Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos deste link.

1) Escreva uma query para exibir a string “This is SQL Exercise, Practice and Solution”.
<br>
<img src="img/ex1.png" alt="Pesquisa"/>
2) Escreva uma query para exibir três números em três colunas.
<br>
<img src="img/ex2.png" alt="Pesquisa"/>
3) Escreva uma query para exibir a soma dos números 10 e 15.
<br>
<img src="img/ex3.png" alt="Pesquisa"/>
4) Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
<br>
<img src="img/ex4.png" alt="Pesquisa"/>
5) Escreva uma query para exibir todas as informações de todos os cientistas.
<br>
<img src="img/ex5.png" alt="Pesquisa"/>
6) Escreva uma query para exibir o nome como “Nome do Projeto” e as horas como “Tempo de Trabalho” de cada projeto.
<br>
<img src="img/ex6.png" alt="Pesquisa"/>
7) Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
<br>
<img src="img/ex7.png" alt="Pesquisa"/>
8) Escreva uma query para exibir o nome dos projetos em ordem alfabética descendente.
<br>
<img src="img/ex8.png" alt="Pesquisa"/>
9) Escreva uma query que exiba a string “O projeto Name precisou de Hours horas para ser concluído.” para cada projeto.
<br>
<img src="img/ex9.png" alt="Pesquisa"/>
10) Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
<br>
<img src="img/ex10.png" alt="Pesquisa"/>
11) Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
<br>
<img src="img/ex11.png" alt="Pesquisa"/>
12) Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
<br>
<img src="img/ex12.png" alt="Pesquisa"/>
13) Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
<br>
<img src="img/ex13.png" alt="Pesquisa"/>
14) Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
<br>
<img src="img/ex14.png" alt="Pesquisa"/>
15) Escreva uma query que exiba a string “Existem Number cientistas na tabela Scientists.”, em que Number se refira a quantidade de cientistas.
<br>
<img src="img/ex15.png" alt="Pesquisa"/>