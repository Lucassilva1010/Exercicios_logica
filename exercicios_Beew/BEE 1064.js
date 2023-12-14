// Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos.
// Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com
// um dígito após o ponto decimal.
// Entrada
// A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo
//  menos um destes números será positivo.
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(Number);


let soma = 0
let qtd = 0
for (let i = 0; i < 6; i++) {
    if (lines[i] > 0) {
        qtd++
        soma += lines[i]
    }
}

let media = parseFloat(soma / qtd)
console.log(`${qtd} valores positivos`)
console.log(media.toFixed(1))