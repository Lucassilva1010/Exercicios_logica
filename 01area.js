var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

//const prompt = require('prompt-sync')();

function calculaArea(frente, lateral, dinheiro){
    var area = frente * lateral;

    var  valor = dinheiro * area;
    console.log(`Area total do terreno de ${frente}mts de frente com ${lateral}mts lateral é: ${area}mts`);
    console.log(`O valor desse Terreno é: R$${valor}`)
}

var f = Number(input('frente: '))
var l = Number(input('lateral: '))
var valor = Number(input('valor: '))


calculaArea(f, l, valor);
