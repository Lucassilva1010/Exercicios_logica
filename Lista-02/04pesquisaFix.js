const prompt = require('prompt-sync')();

var valor = parseFloat(prompt("Digite um valor: "));       

valor = valor + 10;

console.log("A variável somada com 10 produz o resultado:" + valor.toFixed(2));