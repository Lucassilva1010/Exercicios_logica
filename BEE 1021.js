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

const { log } = require('console');
const { listenerCount } = require('process');

var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

let dinheiro = parseFloat(lines.shift()).toFixed(2);

let valor1 = parseInt(dinheiro / 100);
let resto1 = dinheiro % 100;

let valor2 = parseInt(resto1 / 50);
let resto2 = resto1 % 50;

let valor3 = parseInt(resto2 / 20)
let resto3 = resto2 % 50;

console.log("NOTAS:");
console.log(`${valor1} nota(s) de R$ 100.00`)
console.log(`${valor2} nota(s) de R$ 50.00`)
console.log(`${valor3} nota(s) de R$ 20.00`)
