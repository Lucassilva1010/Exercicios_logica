// Escreva um programa que leia três valores com ponto flutuante de dupla 
//precisão: A, B e C. Em seguida, calcule e mostre:
// a) a área do triângulo retângulo que tem A por base e C por altura.
// b) a área do círculo de raio C. (pi = 3.14159)
// c) a área do trapézio que tem A e B por bases e C por altura.
// d) a área do quadrado que tem lado B.
// e) a área do retângulo que tem lados A e B.

const { match } = require('assert');
const { clear } = require('console');

// Entrada
// O arquivo de entrada contém três valores com um dígito após o ponto 
//decimal.


// TRIANGULO: 7.800
// CIRCULO: 84.949
// TRAPEZIO: 18.200
// QUADRADO: 16.000
// RETANGULO: 12.000

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [a, b, c] = lines.shift().split(' ').map(Number);
let pi = 3.14159;
let area = (a * c) / 2;
let cirulo = pi * Math.pow(c, 2);
let trapezio = ((a + b) * c) / 2;
let quadrado = Math.pow(b, 2);
let retangulo = a * b;

console.log(`TRIANGULO: ${area.toFixed(3)}`)
console.log(`CIRCULO: ${cirulo.toFixed(3)}`)
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
console.log(`RETANGULO: ${retangulo.toFixed(3)}`)