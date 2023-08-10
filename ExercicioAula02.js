const prompt = require('prompt-sync')();

main();

function main() {
    let metragemFrente, metragemLateral, areaTerreno
    let valorMetroQuadrado
    let valorTotalTerreno
    
    metragemFrente = obterValorFracionario("Digite a metragem da frente: ")
    metragemLateral = obterValorFracionario("Digite a metragem da lateral: ")
    valorMetroQuadrado = obterValorFracionario("Digite o valor do metro quadrado R$: ")
    
    areaTerreno = calcularAreaTerreno(metragemFrente, metragemLateral) 
    valorTotalTerreno = calcularValorTotal(areaTerreno, valorMetroQuadrado)
    
    console.log("A área do terreno com frente "+ metragemFrente+ "e lateral " +metragemLateral+ " é: "+areaTerreno.toFixed(2))    //desafio 1
    console.log("O valor total do terreno será R$"+valorTotalTerreno.toFixed(2))                //desafio 2     valor de k com duas casas decimais    
}

function calcularValorTotal(area,valor){
    return area * valor
}

function calcularAreaTerreno(frente,lateral) {
    return frente * lateral
}

function obterValorFracionario(mensagem) {
    return parseFloat(prompt(mensagem))
}