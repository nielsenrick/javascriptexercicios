/*Escrever um programa para calcular a soma dos números inteiros existentes entre 1 e N,
inclusive, onde o valor de N será lido através do teclado. N obrigatoriamente deve receber um
valor maior que 1. Caso o valor de N seja menor ou igual a 1 o programa deve mostrar uma
mensagem para o usuário e encerrar a execução.*/

const input = require('prompt-sync')();
let soma;
let cont;
let n;
do {
    cont = 0
    soma = 0
    n = Number(input('DIGITE "N": '));
    while (cont < n){
        cont += 1;
        soma += cont
    }
    if (n > 1){
        console.log(soma)
    } else{
        console.log('FINALIZADO COM SUCESSO!')
    }
} while (n > 1);