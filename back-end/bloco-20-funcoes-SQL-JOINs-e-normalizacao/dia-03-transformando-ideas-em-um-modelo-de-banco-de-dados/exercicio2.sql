DROP SCHEMA IF EXISTS normalization;

CREATE SCHEMA normalization;

USE normalization;

CREATE TABLE
    funcionario (
        funcionario_id INTEGER auto_increment PRIMARY KEY NOT NULL,
        nome VARCHAR(50) NOT NULL,
        sobrenome VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        telefone VARCHAR(50) NOT NULL,
        data_cadastro DATE NOT NULL,
        time_cadastro TIME
    );

INSERT INTO funcionario
VALUES (
        12,
        'Joseph',
        'Rodrigues',
        'jo@gmail.com',
        '(35)998552-1445',
        '2020-05-05',
        '08:50:25'
    ), (
        13,
        'André',
        'Freeman',
        'andre1990@gmail.com',
        '(47)99522-4996',
        '2020-02-05',
        NULL
    ), (
        14,
        'Cíntia',
        'Duval',
        'cindy@outlook.com',
        '(33)99855-4669',
        '2020-05-05',
        '10:55:35'
    ), (
        15,
        'Fernanda',
        'Mendes',
        'fernandamendes@yahoo.com',
        '(33)99200-1556',
        '2020-05-05',
        '11:45:40'
    );

CREATE TABLE
    setor (
        setor_id INTEGER auto_increment PRIMARY KEY NOT NULL,
        nome VARCHAR(50) NOT NULL
    );

INSERT INTO setor
VALUES (1, 'Administração'), (2, 'Estratégico'), (3, 'Marketing'), (4, 'Operacional'), (5, 'Vendas');

CREATE TABLE
    responsabilidade (
        responsabilidade_id INTEGER auto_increment PRIMARY KEY NOT NULL,
        funcionario_id INTEGER,
        FOREIGN KEY (funcionario_id) REFERENCES funcionario (funcionario_id),
        setor_id INTEGER,
        FOREIGN KEY (setor_id) REFERENCES setor (setor_id)
    );

SET FOREIGN_KEY_CHECKS=0;

INSERT INTO
    responsabilidade(funcionario_id, setor_id)
VALUES (1, 12), (5, 12), (4, 13), (2, 14), (5, 14), (3, 15);

SET FOREIGN_KEY_CHECKS=1;