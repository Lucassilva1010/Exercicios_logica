

// Leia dois valores inteiros. A seguir, calcule o produto 
//entre estes dois valores e atribua esta operação à variável
// PROD. A seguir mostre a variável PROD com mensagem 
//correspondente.   
// Entrada

// O arquivo de entrada contém 2 valores inteiros.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');


let a = Number(lines.shift())
let b = Number(lines.shift())

let prod = a * b;
console.log(`PROD = ${prod}`)
