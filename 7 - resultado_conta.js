/*Montar uma aplicação na qual o usuário informe dois números, a operação que deseja
realizar (+, -, x, /), calcule e exiba o resultado da operação matemática.*/

const input = require('prompt-sync')();
let numA = Number(input('1º NÚMERO: '));
let numB = Number(input('2º NÚMERO: '));
let resultado;
console.log('INFORME QUAL OPÇÃO DESEJA:')
console.log('[ 1 ] - ADIÇÃO')
console.log('[ 2 ] - SUBTRAÇÃO')
console.log('[ 3 ] - MULTIPLICAÇÃO')
console.log('[ 4 ] - DIVISÃO')
let operacao = String(input('OP: '))
if (operacao === '1'){
    resultado = numA+numB;
} else if (operacao === '2'){
    resultado = numA-numB
} else if (operacao === '3'){
    resultado = numA*numB
} else if (operacao === '4'){
    resultado = numA/numB
}
console.log(`RESULTADO: ${resultado}`)