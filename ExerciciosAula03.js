const prompt = require('prompt-sync')();

//Neste desafio você deve criar uma função chamada arredondar2Casas e realizar o arredondamento do valor recebido como parametro
// e retornar o valor arredondado com duas casas. O valor retornado deve ser impresso no comando console.log da função main.

main()

function main() {
   let salarioMinimo
    let salarioFuncionario
    
    salarioMinimo = parseFloat(obterValorFracionario("Digite qual é o salário mínimo: "));
    salarioFuncionario = parseFloat(obterValorFracionario("Digite o salário do funcionário: "));
    
    let result =  arredondar2Casas(salarioMinimo, salarioFuncionario);
    console.log(`O funcionário recebe  ${result}   salários mínimos` ); // desafio 1
    
}

function arredondar2Casas(sMinimo, salUsuario) {
let result = (salUsuario / sMinimo);
return result.toFixed(2)
}

function obterValorFracionario(mensagem) {
    return parseFloat(prompt(mensagem))
}