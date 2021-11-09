/*Montar uma aplicação que receba o nome de um aluno, suas quatro notas e calcule e exiba
a sua média final. A aplicação deverá exibir também a situação final desse aluno
(Aprovado/Recuperação/Reprovado)*/

const input = require("prompt-sync")();
let nome = String(input('NOME: '))
let nota1 = Number(input("1ª NOTA: "));
let nota2 = Number(input("2ª NOTA: "));
let nota3 = Number(input("3ª NOTA: "));
let nota4 = Number(input("4ª NOTA: "));
let media = (nota1+nota2+nota3+nota4)/4
let situacao;
if (media < 4){
    situacao = "REPROVADO";
} else if (media >= 4 && media < 7){
    situacao = "RECUPERACAO";
} else if (media >= 7){
    situacao = "APROVADO";
}
console.log("NOME: ", nome)
console.log("MÉDIA: ", media)
console.log("SITUAÇÃO: ", situacao)