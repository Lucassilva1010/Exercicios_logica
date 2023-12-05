// Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo,
// sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima
//  de 1 hora e máxima de 24 horas.
// Entrada

// A entrada contém dois valores inteiros representando a hora de início e a hora de fim do
// jogo.

// Entrada
// A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

var input = require('fs').readFileSync('stdin', 'utf8');
var [hInicial, hFinal] = input.split(' ').map(Number);

var intervalo;
if (hInicial > hFinal) {
    intervalo = 24 - (hInicial - hFinal)
} else if (hInicial < hFinal) {
    intervalo = hFinal - hInicial
} else {
    intervalo = 24
}

console.log(`O JOGO DUROU ${intervalo} HORA(S)`)


