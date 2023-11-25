
// Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a 
// em anos, meses e dias
// Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo 
// mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.
// Entrada
// O arquivo de entrada contém um valor inteiro.
// Saída

// Imprima a saída conforme exemplo fornecido.


// 1 ano(s)
// 1 mes(es)
// 5 dia(s)

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let totalDias = parseInt(lines.shift());
let anos = parseInt(totalDias / 365);
let restoAnos = totalDias % 365;

let mes = parseInt(restoAnos / 30)
let dias = restoAnos % 30

console.log(`${anos} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${dias} dia(s)`);


