var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

var [n1, n2, n3, n4] = lines.shift().split(' ').map(Number)

var primeira = n1 * 2
var segunda = n2 * 3
var terceira = n3 * 4
var quarto = n4 * 1

var total = (primeira + segunda + terceira + quarto) / 10

if (total >= 7.00) {
    console.log(`Media: ${total.toFixed(1)}`)
    console.log('Aluno aprovado.')
} else if (total < 5.00) {
    console.log(`Media: ${total.toFixed(1)}`)
    console.log('Aluno reprovado.')
} else if (total >= 5.00 && total <= 6.9) {
    console.log(`Media: ${total.toFixed(1)}`)
    console.log('Aluno em exame.')
    let recuperacao = parseFloat(lines.shift())
    let res = (recuperacao + total) / 2
    console.log(`Nota do exame: ${recuperacao.toFixed(1)}`)
    if (res >= 5.0) {
        console.log(`Aluno aprovado.`)
    } else if (res < 4.9) {
        console.log(`Aluno reprovado.`)
    }

    console.log(`Media final: ${res.toFixed(1)}`)

}