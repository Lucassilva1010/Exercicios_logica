const prompt = require('prompt-sync')();

function calculaArea(frente, lateral, dinheiro){
    var area = frente * lateral;

    var  valor = dinheiro * area;
    console.log(`Area total do terreno de ${frente}mts de frente com ${lateral}mts lateral é: ${area}mts`);
    console.log(`O valor desse Terreno é: R$${valor}`)
}

var f = Number(prompt('frente: '))
var l = Number(prompt('lateral: '))
var valor = Number(prompt('valor: '))


calculaArea(f, l, valor);
