/* escrever um programa para obter o valor de H. O valor de N é lido atráves do teclado.
H = 1 + 1/2 + 1/3 + 1/4 + ... 1/n */
const input = require('prompt-sync')();
let n = Number(input('INFORME N: '))
let h = 0;
for (let i = 1; i <= n; i++){
    h += 1/i
}
console.log('H: ', h)