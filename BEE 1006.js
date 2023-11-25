

// Leia 3 valores, no caso, variáveis A, B e C, 
// que são as três notas de um aluno. A seguir, calcule a 
// média do aluno, sabendo que a nota A tem peso 2, a nota B tem 
// peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 
// 0 até 10.0, sempre com uma casa decimal.
// // Entrada

// // O arquivo de entrada contém 3 valores com uma casa decimal, 
// de dupla precisão (double).


var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');


let a = parseFloat(lines.shift())
let b = parseFloat(lines.shift())
let c = parseFloat(lines.shift())


let resp = ((a * 2) + (b * 3) + (c * 5)) / 10;

console.log(`MEDIA = ${resp.toFixed(1)}`)