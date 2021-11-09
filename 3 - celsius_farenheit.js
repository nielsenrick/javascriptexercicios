/*Escrever um programa para calcular a temperatura em grau Celsius a partir da temperatura
corrente medida em Farenheit. Utilizar a fórmula abaixo: C = (F-32) / 1,8 */
const input = require('prompt-sync')();
let farenheit = input("FARENHEIT: ");
let celsius = (farenheit-32)/1.8;
console.log(`CELSIUS: ${celsius}`);