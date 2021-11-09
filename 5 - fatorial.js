/*Escrever um programa para calcular e escrever o fatorial de um número inteiro N */
// for ([inicialização]; [condição]; [expressão final])
let input = require('prompt-sync')();
let num = Number(input('NÚMERO: '))
let fatorial = 1;
for (let i = 1; i <= num; i++){
    fatorial *= i
}
console.log(`${num}! = ${fatorial}`)