var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let a = lines.shift(' ');

let b = 0;
let c = 1;
let teste = [0, 1]
let soma = 0

for (let i = 0; i < a; i++) {
    teste[i] = teste[i - 1] + teste[i - 2]
}

// for (let i = 0; i < a.length; i++) {
//     soma += c + ' '
//     c += b
//     b = c - b
// }

//console.log(soma.trim())
console.log(teste.slice(0, a))
