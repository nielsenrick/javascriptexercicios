/*Escrever um programa para calcular a área de um retângulo cujos lados são a e b. Deverá
ser impresso também o valor dos lados*/
const input = require('prompt-sync')();
let ladoA = Number(input('1º LADO DO RETÂNGULO (em cm): '));
let ladoB = Number(input('2º LADO DO RETÂNGULO (em cm): '));
let area = ladoA*ladoB
console.log(`LADO A: ${ladoA}`)
console.log(`LADO B: ${ladoB}`)
console.log(`A área do retângulo informado é ${area} centimetros.`)