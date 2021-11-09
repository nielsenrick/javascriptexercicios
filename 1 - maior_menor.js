/* Escrever um programa que leia através do teclado um conjunto indeterminado de valores
até que um valor nulo (igual a zero) seja informado. Identificar e exibir o maior e o menor
número informado.*/
const input = require('prompt-sync')();
let maior;
let menor;
let cont = 0;
let x;
while (x != 0){
    cont += 1;
    x = Number(input('DIGITE QUALQUER VALOR: '))
    if (cont === 1){
        maior = x
        menor = x
    } else{
        if (x > maior){
            maior = x;
        }
        if (x < menor){
            menor = x
        }
    }
}
console.log('MAIOR: ', maior)
console.log('MENOR: ', menor)