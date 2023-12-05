// Leia um valor de ponto flutuante com duas casas decimais. Este valor representa
// um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis
// no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20,
// 10,5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir 
//mostre a relação de notas necessárias.
// Entrada
// O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).
// Saída
// Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.
// NOTAS:
// 5 nota(s) de R$ 100.00
// 1 nota(s) de R$ 50.00
// 1 nota(s) de R$ 20.00
// 0 nota(s) de R$ 10.00
// 1 nota(s) de R$ 5.00
// // 0 nota(s) de R$ 2.00
// MOEDAS:
// 1 moeda(s) de R$ 1.00
// 1 moeda(s) de R$ 0.50
// 0 moeda(s) de R$ 0.25
// 2 moeda(s) de R$ 0.10
// 0 moeda(s) de R$ 0.05
// 3 moeda(s) de R$ 0.01

var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

let dinheiro = parseFloat(lines.shift());
dinheiro *= 100;
let valor1 = parseInt(dinheiro / 10000);
let resto1 = dinheiro % 10000;

let valor2 = parseInt(resto1 / 5000);
let resto2 = resto1 % 5000;

let valor3 = parseInt(resto2 / 2000);
let resto3 = resto2 % 2000;

let valor4 = parseInt(resto3 / 1000);
let resto4 = resto3 % 1000;

let valor5 = parseInt(resto4 / 500);
let resto5 = resto4 % 500;

let valor6 = parseInt(resto5 / 200);
let resto6 = resto5 % 200;

let moeda1 = parseInt(resto6 / 100);
let resM1 = resto6 % 100;

let moeda2 = parseInt(resM1 / 50)
let resM2 = resM1 % 50;

let moeda3 = parseInt(resM2 / 25);
let resM3 = resM2 % 25;

let moeda4 = parseInt(resM3 / 10)
let resM4 = resM3 % 10;

let moeda5 = parseInt(resM4 / 5);
let resM5 = parseInt(resM4 % 5);


console.log("NOTAS:");
console.log(`${valor1} nota(s) de R$ 100.00`)
console.log(`${valor2} nota(s) de R$ 50.00`)
console.log(`${valor3} nota(s) de R$ 20.00`)
console.log(`${valor4} nota(s) de R$ 10.00`)
console.log(`${valor5} nota(s) de R$ 5.00`)
console.log(`${valor6} nota(s) de R$ 2.00`)
console.log("MOEDAS:");
console.log(`${moeda1} moeda(s) de R$ 1.00`)
console.log(`${moeda2} moeda(s) de R$ 0.50`)
console.log(`${moeda3} moeda(s) de R$ 0.25`)
console.log(`${moeda4} moeda(s) de R$ 0.10`)
console.log(`${moeda5} moeda(s) de R$ 0.05`)
console.log(`${resM5} moeda(s) de R$ 0.01`)
