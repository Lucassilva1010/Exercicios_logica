var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let raio = parseFloat(lines.shift())
let pi = 3.14159

let result = (4 / 3) * pi * Math.pow(raio, 3);
console.log(`VOLUME = ${result.toFixed(3)}`)