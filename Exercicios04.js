const prompt = require('prompt-sync')();
//Faça os ajustes necessários para que o código abaixo funcione.
//Os dois pontos que necessitam de ajustes são as linhas que estão com o comentário //ajustes aqui


main()

function main() {
    let nota1
    let nota2
    let nota3
    let resultado

    nota1 = Number(obterValorFracionario("Digite o valor da nota1: "))
    nota2 = Number(obterValorFracionario("Digite o valor da nota2: "))
    nota3 = Number(obterValorFracionario("Digite o valor da nota3: "))
    
    resultado =  calculaMediaPonderada(nota1, nota2, nota3)  //ajustes aqui
    console.log(`A media ponderada das notas ${nota1}, ${nota2} e ${nota3} é:  ${resultado}`) //ajustes aqui
}

function obterValorFracionario(mensagem) {
    return parseFloat(prompt(mensagem))
}

function calculaMediaPonderada(N1,N2,N3) {  //ajuste aqui a assinatura da função
    let peso1 = N1
    let peso2 = N2
    let peso3 = N3
    let somaPesos = (peso1 + peso2 + peso3)
    
    return ( ((N1 * peso1) + (N2 * peso2) + (N3 * peso3)) / somaPesos).toFixed(2);
}
