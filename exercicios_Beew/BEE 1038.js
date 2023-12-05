var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

var [cod, valor] = lines.shift().split(' ').map(Number)
var result

if (cod == 1) {
    result = 4.00 * valor;
    console.log(`Total: R$ ${result.toFixed(2)}`)
} else if (cod == 2) {
    result = 4.50 * valor;
    console.log(`Total: R$ ${result.toFixed(2)}`)
} else if (cod == 3) {
    result = 5.00 * valor;
    console.log(`Total: R$ ${result.toFixed(2)}`)
} else if (cod == 4) {
    result = 2.00 * valor;
    console.log(`Total: R$ ${result.toFixed(2)}`)
} else if (cod == 5) {
    result = 1.50 * valor;
    console.log(`Total: R$ ${result.toFixed(2)}`)
}

