// Leia 2 valores inteiros (A e B). Após, o programa deve mostrar 
// uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se 
// os valores lidos são múltiplos entre si.

var input = require('fs').readFileSync('stdin', 'utf8');
//var lines = input.split(' ').map(Number);
var lines = input.split('\n')

let [a, b] = lines.shift().split(' ').map(Number)

let aux;
if (a < b) {
    aux = a
    a = b
    b = aux
}

if (a % b == 0) {
    console.log("Sao Multiplos")
} else {

    console.log("Nao sao Multiplos")
}
