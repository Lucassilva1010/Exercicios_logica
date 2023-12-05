// Escreva um programa que leia o número de um funcionário, seu
// número de horas trabalhadas, o valor que recebe por hora e
// calcula o salário desse funcionário. A seguir, mostre o número
// e o salário do funcionário, com duas casas decimais.

// Entrada
// O arquivo de entrada contém 2 números inteiros e 1 número com
// duas casas decimais, representando o número, quantidade de horas
// trabalhadas e o valor que o funcionário recebe por hora trabalhada,
// respectivamente.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let numeroFun = Number(lines.shift())
let horas = Number(lines.shift())
let salario = parseFloat(lines.shift())

let receber = (salario * horas);

console.log(`NUMBER = ${numeroFun}`)
console.log(`SALARY = U$ ${receber.toFixed(2)}`)
