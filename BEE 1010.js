
// Neste problema, deve-se ler o código de uma peça 1, o número de
// peças 1, o valor unitário de cada peça 1, o código de uma peça 2, 
// o número de peças 2 e o valor unitário de cada peça 2. Após, 
// calcule e mostre o valor a ser pago.
// Entrada

// O arquivo de entrada contém duas linhas de dados. Em cada linha 
// haverá 3 valores, respectivamente dois inteiros e um valor com 2 
// casas decimais.


var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [cod1, qtd1, preco1] = lines.shift().split(' ').map(Number);
let [cod2, qtd2, preco2] = lines.shift().split(' ').map(Number);

let valorPeca1 = qtd1 * preco1;
let valorPeca2 = qtd2 * preco2;

let pagar = (parseFloat(valorPeca1) + parseFloat(valorPeca2));

console.log(`VALOR A PAGAR: R$ ${pagar.toFixed(2)}`);
