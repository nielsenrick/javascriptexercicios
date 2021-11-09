/* Escrever um programa para calcular e exibir o valor da seguinte expressão: T = S x P, onde
S é a soma de todos os inteiros de 1 a N, inclusive, e P é o produto de todos os inteiros de 1 a
M, inclusive. O valor de N e o de M serão lidos através do teclado. */

const input = require('prompt-sync')();
let n = Number(input('INFORME N: '))
let m = Number(input('INFORME M: '))
let soma = 0;
let produto = 1;
let t;
for (let i = 1; i <= n; i++){
    soma += i
}
for (let j = 1; j <= m; j++){
    produto *= j
}
t = soma*produto
console.log('T = Soma x Produto')
console.log(`${t} = ${soma} x ${produto}`)