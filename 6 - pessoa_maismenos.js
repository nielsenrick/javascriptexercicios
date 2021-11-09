/*Desenvolva um programa que leia o nome e a idade de 3 pessoas e mostre o nome da
pessoa mais velha e o nome da pessoa mais nova.*/
const input = require('prompt-sync')();
// coletando nomes e idades
let nomeA = String(input("1º NOME: "))
let idadeA = Number(input("1° IDADE: "))
let nomeB = String(input("2º NOME: "))
let idadeB = Number(input("2° IDADE: "))
let nomeC = String(input("3º NOME: "))
let idadeC = Number(input("3° IDADE: "))
let maiorIdade;
let menorIdade;
// verificando qual a maior idade
if (idadeA > idadeB && idadeA > idadeC){
    maiorIdade = idadeA
} else if (idadeB > idadeA && idadeB > idadeC){
    maiorIdade = idadeB
} else if (idadeC > idadeA && idadeC > idadeB){
    maiorIdade = idadeC
}
// verificando qual a menor idade
if (idadeA < idadeB && idadeA < idadeC){
    menorIdade = idadeA
} else if (idadeB < idadeA && idadeB < idadeC){
    menorIdade = idadeB
} else if (idadeC < idadeA && idadeC < idadeB){
    menorIdade = idadeC
}
// printando o menor nome
if (menorIdade === idadeA){
    console.log(`${nomeA} É A PESSOA MAIS NOVA!`);
} else if (menorIdade === idadeB){
    console.log(`${nomeB} É A PESSOA MAIS NOVA!`)
} else if (menorIdade === idadeC){
    console.log(`${nomeC} É A PESSOA MAIS NOVA!`)
}
// printando o maior nome
if (maiorIdade === idadeA){
    console.log(`${nomeA} É A PESSOA MAIS VELHA!`);
} else if (maiorIdade === idadeB){
    console.log(`${nomeB} É A PESSOA MAIS VELHA!`)
} else if (maiorIdade === idadeC){
    console.log(`${nomeC} É A PESSOA MAIS VELHA!`)
}