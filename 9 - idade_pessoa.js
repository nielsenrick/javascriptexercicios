/*Escrever um programa que leia o nome e a data de nascimento (dia, mês e ano) de uma
pessoa e calcule a idade atual dele. Exibir o nome e a idade calculada.*/

const input = require("prompt-sync")();
var data = new Date(); // instanciando objeto
let nome = String(input('NOME: '))
let nascimento = String(input("DATA DE NASCIMENTO (dd/mm/aaaa): "))
// subtraindo o ano atual pelo ano informado pelo usuário
let idade = data.getFullYear()-Number(nascimento[6]+nascimento[7]+nascimento[8]+nascimento[9]);
// verificando se o mês atual é anterior ao mês de nascimento
if (data.getMonth()+1 < Number((nascimento[3]+nascimento[4]))){
    idade -= 1;
    // verificando se o mes atual é igual ao mês de nascimento
} else if (data.getMonth()+1 === Number((nascimento[3]+nascimento[4]))){
    // verificando se o dia atual é anterior ao dia de nascimento
    if (data.getDate() < Number(nascimento[0]+nascimento[1])){
        idade -= 1;
    }
}
console.log()
console.log(`${nome.toUpperCase()} TEM ${idade} ANOS`)