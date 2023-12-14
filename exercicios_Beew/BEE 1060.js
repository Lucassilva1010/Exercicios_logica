
// Faça um programa que leia 6 valores.Estes valores serão somente
// negativos ou positivos(desconsidere os valores nulos).A seguir, mostre
// a quantidade de valores positivos digitados.
// Entrada
// Seis valores, negativos e / ou positivos.
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);


let qtd = 0;
for (let i = 0; i < lines.length; i++) {
    if (lines[i] > 0) {
        qtd++
    }

}
console.log(`${qtd} valores positivos`)