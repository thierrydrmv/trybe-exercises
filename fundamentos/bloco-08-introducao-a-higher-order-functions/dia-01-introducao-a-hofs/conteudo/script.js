/*
Para fixar
Vamos praticar com os seguintes exercícios:
1 - Crie uma função que retorne a string 'Acordando!!';
2 - Crie outra função que retorne a string 'Bora tomar café!!';
3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
4 - Agora desenvolva uma HOF chamada doingThings e configure esta 
função para que imprima no console o resultado da execução das funções que você 
criou nos exemplos anteriores. Exemplo: */

const acordando = () => console.log('Acordando!!');

const cafeDaManha = () => console.log('Bora tomar café!!');

const boaNoite = () => console.log('Partiu dormir!!');

const doingThings = (func) => func();

doingThings(acordando);
doingThings(cafeDaManha);
doingThings(boaNoite);
