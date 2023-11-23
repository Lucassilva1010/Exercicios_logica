
// Leia quatro valores inteiros A, B, C e D. A seguir, calcule 
// e mostre a diferença do produto de A e B pelo produto de C e D 
// segundo a fórmula: DIFERENCA = (A * B - C * D).
// Entrada

// O arquivo de entrada contém 4 valores inteiros.
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');


let a = Number(lines.shift())
let b = Number(lines.shift())
let c = Number(lines.shift())
let d = Number(lines.shift())


let resp = ((a * b) - (c * d));

console.log(`DIFERENCA = ${resp}`)