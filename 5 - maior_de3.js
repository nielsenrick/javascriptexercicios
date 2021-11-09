/*Escrever um programa que leia três valores, e identifique o maior valor dentre eles.*/
const input = require('prompt-sync')();
let n1 = Number(input('1º NÚMERO: '));
let n2 = Number(input('2º NÚMERO: '));
let n3 = Number(input('3º NÚMERO: '));
if (n1 > n2 && n1 > n3){
    console.log(n1 + " É O MAIOR NÚMERO!");
} else if (n2 > n1 && n2 > n3){
    console.log(n2 + " É O MAIOR NÚMERO!");
} else if (n3 > n1 && n3 > n2){
    console.log(n3 + " É O MAIOR NÚMERO!");
}