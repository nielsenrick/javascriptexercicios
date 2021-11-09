/* Escrever um programa que receba três notas e calcule a média ponderada desse aluno,
considerando que: a primeira nota tem peso 2,5; a segunda nota tem peso 3,5; e a terceira
nota tem peso 4. Exibir as três notas e a média calculada.*/
const input = require('prompt-sync')();
let notaA = Number(input('1º NOTA:  '));
let notaB = Number(input('2º NOTA:  '));
let notaC = Number(input('3º NOTA:  '));
let media = ((notaA * 2.5) + (notaB * 3.5) + (notaC * 4)) / (10);
console.log('------------------------------------')
console.log(`NOTAS: ${notaA}, ${notaB}, ${notaC}`)
console.log(`MÉDIA PONDERADA: ${media}`)