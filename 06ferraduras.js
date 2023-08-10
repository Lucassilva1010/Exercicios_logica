const prompt = require('prompt-sync')();

var qCavalos = parseInt(prompt('Informe a quantidade de cavlos: '));
var vFerradura = parseFloat(prompt('Informe o valor da Ferradura: '));

var qFerraduras = qCavalos * 4;
console.log(`A quantidade de ferraduras Necessarias: ${qFerraduras}`);

var total = vFerradura * qFerraduras;

console.log(`Valor total para a compra das ferraduras: ${parseFloat(total.toFixed(2))}`);

var nome = 'Lucas';

