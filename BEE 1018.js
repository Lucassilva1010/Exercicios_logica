
// Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o 
// valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir
//  mostre o valor lido e a relação de notas necessárias.
// Entrada

// O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).


var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let dinheiro = lines.shift(' ');

let valor1 = dinheiro / 100;
let resto1 = dinheiro % 100;

let valor2 = resto1 / 50;
let resto2 = resto1 % 50;

let valor3 = resto2 / 20;
let resto3 = resto2 % 20;

let valor4 = resto3 / 10;
let resto4 = resto3 % 10;

let valor5 = resto4 / 5;
let resto5 = resto4 % 5;

let valor6 = resto5 / 2;
let resto6 = resto5 % 2;

let valor7 = resto6 / 1;


console.log(dinheiro)
console.log(`${parseInt(valor1)} nota(s) de R$ 100,00`)
console.log(`${parseInt(valor2)} nota(s) de R$ 50,00`)
console.log(`${parseInt(valor3)} nota(s) de R$ 20,00`)
console.log(`${parseInt(valor4)} nota(s) de R$ 10,00`)
console.log(`${parseInt(valor5)} nota(s) de R$ 5,00`)
console.log(`${parseInt(valor6)} nota(s) de R$ 2,00`)
console.log(`${parseInt(valor7)} nota(s) de R$ 1,00`)



