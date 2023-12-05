var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

var [x, y] = lines.shift().split(' ').map(numero => parseFloat(numero))

if (x == 0 && y == 0) {
    console.log(`Origem`)
} else if (x < 0 && y > 0) {
    console.log(`Q2`)

} else if (x < 0 && y < 0) {
    console.log(`Q3`)
} else if (x > 0 && y < 0) {
    console.log(`Q4`)
} else if (x != 0 && y == 0) {
    console.log(`Eixo X`)
} else if (x == 0 && y != 0) {
    console.log(`Eixo Y`)
}
else {

    console.log(`Q1`)
}