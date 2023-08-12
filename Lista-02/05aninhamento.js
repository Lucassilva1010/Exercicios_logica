const prompt = require('prompt-sync')();
//Faça o aninhamento de comandos para que não seja necessário utilizar as variáveis resultado1 e resultado2 
//colocando o código aninhado dentro do console.log mantendo o mesmo resultado produzido: 10.13 conforme o output da imagem 
var valor1 = 10
var valor2 = 3
var valor3 = 4
var valor4 = 3.2

console.log(`Novo Resultado: ${Math.abs(((valor1*valor3)/valor2)-valor4).toFixed(2)}`);

