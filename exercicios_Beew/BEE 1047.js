// Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. 
//A seguir calcule a duração do jogo.
// Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.
// Entrada
// Quatro números inteiros representando a hora de início e fim do jogo.

const { totalmem } = require('os');

var input = require('fs').readFileSync('stdin', 'utf8');
var [hInicial, minutoInicial, hFinal, minutofinal] = input.split(' ').map(Number);

let totalHora, totalMinutos;

if (minutoInicial < minutofinal) {
    totalMinutos = Math.abs(minutoInicial - minutofinal)
} else if (minutoInicial > minutofinal) {
    totalMinutos = 60 - (minutoInicial - minutofinal)
} else if (minutoInicial == minutofinal) {
    totalMinutos = 0
}

if (hInicial < hFinal && minutoInicial > minutofinal) {
    totalHora = Math.abs(hInicial - hFinal) - 1
} else if (hInicial < hFinal) {
    totalHora = Math.abs(hInicial - hFinal)
} else if (hInicial > hFinal && minutoInicial > minutofinal) {
    totalHora = 24 - (hInicial - hFinal) - 1
} else if (hInicial > hFinal) {
    totalHora = 24 - (hInicial - hFinal)
} else if (hInicial == hFinal && minutoInicial > minutofinal) {
    totalHora = 24 - 1
} else if (hInicial == hFinal && minutofinal != minutoInicial) {
    totalHora = 0
} else if (hInicial == hFinal) {
    totalHora = 24
}

console.log(`O JOGO DUROU ${totalHora} HORA(S) E ${totalMinutos} MINUTO(S)`)



