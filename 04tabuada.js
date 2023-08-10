const prompt = require('prompt-sync')();

function tabudada(numero){
    for(var i = 0; i<numero; i++){
        var resp = i + numero;
        console.log(`A soma de: ${i} + ${numero} = ${resp}`)
    }
}

var numero = Number(prompt('Digite o valor a ser calculado: '))

tabudada(numero)


console.log("")