

//Leia dois valores inteiros, no caso para variáveis A e B.
// A seguir, calcule a soma entre elas e atribua à variável SOMA. 
//A seguir escrever o valor desta variável.
//Entrada
//O arquivo de entrada contém 2 valores inteiros.


var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let x = Number(lines.shift())
let y = Number(lines.shift())

let resultado = x + y;

console.log(`SOMA = ${resultado}`)
