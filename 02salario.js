const prompt = require('prompt-sync')();

function salario(salarioMin, salarioUsuario) {
    var quantiSalario = salarioUsuario / salarioMin;
    return quantiSalario;
}


var salMin = parseFloat(prompt('Valor do Salario minimo:'));
var salUsuario = parseFloat(prompt('Valor do Salario do usuario:'));




var saldo = salario(salMin, salUsuario);

console.log(`O funcionario Recebe O equivalente a ${saldo.toFixed(2)} salarrios minimos.`);


