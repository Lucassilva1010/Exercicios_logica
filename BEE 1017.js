var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let horas = Number(lines.shift());
let velocidade = Number(lines.shift());

let distancia = horas * velocidade;
let consumo = distancia / 12;


console.log(`${consumo.toFixed(3)} km/l`);