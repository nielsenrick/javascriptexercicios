/* Seja a sequência de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, … onde cada termo, a partir do
terceiro, é obtido pela soma dos dois termos anteriores. Escrever um programa para calcular e
imprimir todos os termos da sequência de Fibonacci menores do que N, previamente lido. */

const input = require('prompt-sync')();
let n = Number(input('INFORME N: '))
let ultimo = 1;
let penultimo = 0;
for (let i = 0; i <= n; i=ultimo+penultimo){
    penultimo = ultimo
    ultimo = i
    console.log(i)
}
