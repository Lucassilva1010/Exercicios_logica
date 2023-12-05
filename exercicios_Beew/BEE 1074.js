var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

var entrada = Number(lines.shift());

for (let i = 0; i < entrada; i++) {

    var valor = Number(lines.shift());

    if (valor == 0) {
        console.log('NULL')

    } else {
        if (valor > 0 && valor % 2 != 0) {
            console.log('ODD POSITIVE')

        } else if (valor < 0 && valor % 2 != 0) {

            console.log('ODD NEGATIVE')
        } else if (valor < 0 && valor % 2 == 0) {

            console.log('EVEN NEGATIVE')

        } else {

            console.log('EVEN POSITIVE')
        }
    }

}

