/*Escrever um programa que leia dois valores quaisquer, calcule a diferença entre o maior e o
menor, e em seguida exiba os três valores.*/
const input = require('prompt-sync')();
let numA = Number(input('1º NÚMERO: '));
let numB = Number(input('2º NÚMERO: '));
if (numA > numB){
    diferenca = numA - numB;
} else{
    diferenca = numB - numA;
}
console.log();
console.log(`NÚMERO A: ${numA}`);
console.log(`NÚMERO B: ${numB}`);
console.log(`DIFERENÇA: ${diferenca}`);