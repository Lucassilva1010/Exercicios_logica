
// Leia um valor inteiro, que é o tempo de duração em segundos de um determinado
//  evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.
// Entrada
// O arquivo de entrada contém um valor inteiro N.
// Saída
// Imprima o tempo lido no arquivo de entrada (segundos), convertido para
//  horas:minutos:segundos, conforme exemplo fornecido.

var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');
let totalSegundos = parseInt(lines.shift());

let horas = parseInt(totalSegundos / 3600);
let restoHoras = totalSegundos % 3600;

let minutos = parseInt(restoHoras / 60)
let segundos = restoHoras % 60;

console.log(`${horas}:${minutos}:${segundos}`);


// horas.toString().padStart(2, 0);
// minutos = minutos.toString().padStart(2,' ');
// segundos = segundos.toString().padStart(3,);
