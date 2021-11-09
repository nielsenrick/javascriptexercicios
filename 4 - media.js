/*Dadas as notas obtidas por cada aluno de uma disciplina, escrever um programa para ler
essas notas. O programa deve calcular e exibir a média aritmética das notas dos alunos.
Considerar o flag como sendo a nota 99.*/
let input = require('prompt-sync')();
let nota;
let soma = 0;
let media;
let cont = 0;
do{
    nota = Number(input('NOTA: '))
    soma += nota
    cont += 1
    if (nota === 99){
        soma -= 99
        cont -= 1
        media = soma/cont
        console.log('MÉDIA: ', media)
    }
} while (nota != 99);