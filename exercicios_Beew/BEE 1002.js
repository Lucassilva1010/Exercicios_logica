

// A fórmula para calcular a área de uma circunferência é:
// area = π . raio2. Considerando para este problema 
//que π = 3.14159:

// - Efetue o cálculo da área, elevando o
// valor de raio ao quadrado e multiplicando por π.

// Entrada
// A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.


var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let raio = parseFloat(lines.shift())
let pi = 3.14159

let result = pi * Math.pow(raio, 2);

console.log(`A=${result.toFixed(4)}`)