
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [a, b, c] = lines.shift().split(' ').map(Number);

let maior = (a + b + Math.abs(a - b)) / 2;
let maiorAbc = (maior + c + Math.abs(maior - c)) / 2;

console.log(`${maiorAbc} eh o maior`);