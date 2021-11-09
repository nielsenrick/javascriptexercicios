/*Dado um conjunto de valores positivos, lidos através do teclado, escrever um programa
para determinar a soma desses valores. Um valor negativo lido indica o fim da leitura dos
dados e não deve ser considerado na soma (esse último valor chama-se flag).*/

const input = require('prompt-sync')();
let n;
let soma = 0;
do{
    n = Number(input('NÚMERO: '));
    soma += n
    if (n < 0){
        soma -= n
    }
} while (n >= 0);
console.log('SOMA: ', soma)