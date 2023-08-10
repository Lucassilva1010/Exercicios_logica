const prompt = require('prompt-sync')();

function divisao(n1,n2){
    var result = n1 / n2;
    return result;
}

var numero1 = Number(prompt('Informe o valor 1: '));
var numero2 = Number(prompt('Informe o valor 2: '));


var resultDivisao = divisao(numero1, numero2);

console.log(`A divisao de ${numero1} e ${numero2} é: ${resultDivisao.toFixed(2)}`)
