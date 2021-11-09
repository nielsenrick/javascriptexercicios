/*Um banco concederá um crédito especial aos seus clientes, variável com o saldo médio no
último ano. Faça um programa que leia o saldo médio de um cliente e calcule o valor do crédito
de acordo com a tabela abaixo. Mostre uma mensagem informando o saldo médio e o valor do
crédito.
● Saldo médio Percentual de 0 a 200 nenhum crédito;
● de 201 a 400 20% do valor do saldo médio;
● de 401 a 600 30% do valor do saldo médio;
● acima de 601 40% do valor do saldo médio*/
const input = require('prompt-sync')();
let saldoMedio = Number(input('SALDO MÉDIO: '));
let credito;
if (saldoMedio <= 200){
    credito = 0
} else if (saldoMedio > 200 && saldoMedio <= 400){
    credito = saldoMedio*0.2
} else if (saldoMedio > 400 && saldoMedio <= 600){
    credito = saldoMedio*0.3
} else if (saldoMedio > 600){
    credito = saldoMedio * 0.4
}
console.log('---------------------------')
console.log(`SALDO MÉDIO: ${saldoMedio}`);
console.log(`CRÉDITO: ${credito}`);