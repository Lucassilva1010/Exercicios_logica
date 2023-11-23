
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let km = Number(lines.shift());
let l = parseFloat(lines.shift()).toFixed(1);

let consumo = km / l;


console.log(`${consumo.toFixed(3)} km/l`);