/*O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem
do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do
distribuidor seja de 28% e os impostos de 45%, escreva um programa que leia o custo de
fábrica de um carro e escreva o custo ao consumidor.*/
const input = require('prompt-sync')();
const distribuidor = 0.28;
const impostos = 0.45;
let custoFabrica = Number(input('CUSTO DE FÁBRICA: '))
let custoConsumidor = (custoFabrica*1.45)*1.28
console.log(`CUSTO PARA O CONSUMIDOR: ${custoConsumidor}`)