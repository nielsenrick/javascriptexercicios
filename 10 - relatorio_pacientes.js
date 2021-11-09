/* Escrever um programa que leia os dados existentes em uma relação de pacientes de uma
clínica. Para paciente são informados o nome, o sexo, o peso, a idade e a altura. Para sinalizar
o fim da lista será digitada a palavra “fim” no nome do paciente. Exiba um relatório contendo:
i. a quantidade de pacientes.
ii. a média de idade dos homens.
iii. a quantidade de mulheres com altura entre 1,60 e 1,70 e peso acima de 70kg.
iv. a quantidade de pessoas com idade entre 18 e 25.
v. o nome do paciente mais velho.
vi. o nome da mulher mais baixa. */

const input = require('prompt-sync')();
let nomePaciente;
let qtdPacientes = 0;
let qtdHomens = 0;
let qtdMulheres = 0;
let somaIdadeH = 0;
let mediaIdadeH;
let qtdJovens = 0;
let mulheresPesoAltura = 0;
let maiorIdade = 0;
let menorAlturaM;
let nomeMaiorIdade;
let nomeMenorAlturaM;
let qtdPacientesM = 0;
do{
    console.log('------- INFORMAÇÕES DO PACIENTE -------')
    // pergunto o nome e se for 'FIM', finalizo.
    nomePaciente = String(input('NOME: '));
    if (nomePaciente.toUpperCase() === 'FIM'){
        break
    }
    // pergunto o sexo e solicito que informe 'M' ou 'F'.
    do{
        console.log('DIGITE UM VALOR VÁLIDO (M/F)')
        sexoPaciente = String(input('SEXO (M/F): '));
    } while(sexoPaciente.toUpperCase() != 'F' && sexoPaciente.toUpperCase() != 'M');
    if (sexoPaciente === 'M'){
        qtdPacientesM += 1;
    }
    // perguntando peso e idade
    pesoPaciente = Number(input('PESO: '));
    idadePaciente = Number(input('IDADE: '));
    // verifico qual a maior idade
    if (idadePaciente > maiorIdade){
        maiorIdade = idadePaciente;
        nomeMaiorIdade = nomePaciente;
    }
    // a quantidade de pessoas com idade entre 18 e 25
    if (idadePaciente >= 18 && idadePaciente <= 25){
        qtdJovens += 1;
    }
    // a média de idade dos homens
    if (sexoPaciente === 'M'){
        qtdHomens += 1;
        somaIdadeH += idadePaciente;
        mediaIdadeH = somaIdadeH/qtdHomens;
    }
    // perguntando altura
    alturaPaciente = Number(input('ALTURA: '));
    // o nome da mulher mais baixa.
    if (sexoPaciente === 'F'){
        qtdMulheres += 1;
        if (qtdMulheres === 1){
            menorAlturaM = alturaPaciente;
        }
        if (alturaPaciente < menorAlturaM){
            menorAlturaM = alturaPaciente;
            nomeMenorAlturaM = nomePaciente;
        }
    }
    // a quantidade de mulheres com altura entre 1,60 e 1,70 e peso acima de 70kg
    if (alturaPaciente >= 1.60 && alturaPaciente <= 1.70){
        if (pesoPaciente > 70){
            mulheresPesoAltura += 1
        }
    }
    // a quantidade de pacientes
    qtdPacientes += 1;
} while (nomePaciente.toUpperCase() != 'FIM')
console.log('--------------- INFORMAÇÕES ---------------')
console.log('QUANTIDADE DE PACIENTES: ', qtdPacientes)
console.log('MÉDIA DA IDADE DOS HOMENS: : ', mediaIdadeH)
console.log('QTD DE MULHERES COM ALTURA ENTRE\n 1.6m e 1.7m, COM PESO ACIMA DE 70KG: ', mulheresPesoAltura)
console.log('PESSOAS COM IDADE ENTRE 18 E 25 ANOS: ', qtdJovens)
console.log('PACIENTE MAIS VELHO: ', nomeMaiorIdade)
console.log('MULHER MAIS BAIXA: ', nomeMenorAlturaM)