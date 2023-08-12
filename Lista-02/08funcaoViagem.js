const prompt = require('prompt-sync')();main()


main()

function main() {
    let distancia
    let kmPorLitro
    let valorLitro
    let velocidadeMedia
    
    distancia = getFloatNumber("Digite a distância a ser percorrida (km): ")
    velocidadeMedia = getFloatNumber("Digite a velocidade média do carro: ")
    kmPorLitro = getFloatNumber("Digite quantos km/l o veículo faz: ")
    valorLitro = getFloatNumber("Digite digite o valor do litro do combustível: ")
    
    var totalHoras = calcTempoViagem(distancia,velocidadeMedia)
    console.log();
    
    var totalGastoCombustivel = calcValorCombustivel(distancia,kmPorLitro, valorLitro);

    console.log("A viagem irá demorar: " + converterHoras(totalHoras) )
    console.log("O gasto com combustível será de R$: " + totalGastoCombustivel );

}

function calcTempoViagem(distancia, velocidadeMedia){
    return (distancia / velocidadeMedia).toFixed(2);
}

function calcValorCombustivel(distancia,kmPorLitro, valorLitro){
    let  totalCombustivel = distancia/ kmPorLitro;
    let total = totalCombustivel * valorLitro;
    return total.toFixed(2);
}

//a funcao deve receber um valor de horas 
function converterHoras(totalHoras){

    let horas = Math.floor(totalHoras);// Arredonda o valor para baixo
    let minutos = Math.round((totalHoras - horas) *60);// Arredonda o valor mais proximo para cima 
    return `${horas} Horas e ${minutos} Minutos` ;
}

function getFloatNumber(message) {
    return Number(prompt(message));
}