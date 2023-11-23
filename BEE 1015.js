
// Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no 
// plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas 
// decimais após a vírgula, segundo a fórmula:

const { match } = require('assert');

// Distancia = 

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [x1, y1] = lines.shift().split(' ').map(parseFloat);
let [x2, y2] = lines.shift().split(' ').map(parseFloat);

let distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y1 - y2), 2));

console.log(`${distancia.toFixed(4)}`)
