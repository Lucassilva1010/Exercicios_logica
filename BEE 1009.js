

// Faça um programa que leia o nome de um vendedor, o seu salário
// fixo e o total de vendas efetuadas por ele no mês (em dinheiro).
// Sabendo que este vendedor ganha 15% de comissão sobre suas vendas
// efetuadas, informar o total a receber no final do mês, com duas
// casas decimais.
// Entrada

// O arquivo de entrada contém um texto (primeiro nome do vendedor)
//  e 2 valores de dupla precisão (double) com duas casas decimais,
//  representando o salário fixo do vendedor e montante total das
//  vendas efetuadas por este vendedor, respectivamente.
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let nome = lines.shift();
let salario = parseFloat(lines.shift());
let totalVendas = parseFloat(lines.shift());
let comis = totalVendas * 0.15;

let receber = (salario + comis);

console.log(`TOTAL = R$ ${receber.toFixed(2)}`);
