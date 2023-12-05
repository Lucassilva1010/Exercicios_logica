// se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
// se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
// se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
// se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
// se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO

const { match } = require('assert');

// se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(Number);

lines.sort((a, b) => b - a);
let a = lines[0];
let b = lines[1]
let c = lines[2]

if (a >= b + c) {
    console.log('NAO FORMA TRIANGULO')
} else if (Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2)) {
    console.log('TRIANGULO RETANGULO')
} else if (Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2)) {
    console.log('TRIANGULO OBTUSANGULO')
} else if (Math.pow(a, 2) < Math.pow(b, 2) + Math.pow(c, 2)) {
    console.log('TRIANGULO ACUTANGULO')
}

if (a == b && a == c && b == c) {
    console.log('TRIANGULO EQUILATERO')
} else if (a == b || b == c) {

    console.log('TRIANGULO ISOSCELES')
}
