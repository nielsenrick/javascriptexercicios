/* Dados três números inteiros, verificar se esses números correspondem aos lados de um
triângulo. Para que correspondam aos lados de um triângulo, cada lado deve ser menor que a
soma dos comprimentos dos outros dois lados.*/

const input = require('prompt-sync')();
let ladoA = Number(input('1º LADO (em cm): '));
let ladoB = Number(input('2º LADO (em cm): '));
let ladoC = Number(input('3º LADO (em cm): '));
if (ladoA + ladoB > ladoC && ladoB+ladoC > ladoA && ladoA+ladoC > ladoB){
    if (ladoA === ladoB && ladoB === ladoC){
        console.log("TRIÂNGULO EQUILÁTERO");
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
        console.log("TRIÂNGULO ISÓSCELES");
    } else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA){
        console.log("TRIÂNGULO ESCALENO");
    }
} else{
    console.log('NÃO É UM TRIANGULO!');
}