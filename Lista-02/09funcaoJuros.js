const prompt = require('prompt-sync')();
main();
function main(){
    var n = Number("444").toFixed(0)
    var prestacao = parseFloat(prompt("Qual o valor da prestação que está em atraso? "));
    var tempoAtraso = parseFloat(prompt("Quantos meses essa prestação já está em atraso? "));
    var juros = parseFloat(prompt("Qual o valor da taxa de juros a ser aplicada? "));
    
    var valorPreju = prejuizo(prestacao,juros, tempoAtraso); 
    var valorPagoJuros = valorJuros(valorPreju, prestacao) 

    console.log(`O valor do prejuizo é: ${valorPreju}`)
    console.log(`O valor pago de juros foi: ${valorPagoJuros}`)
}

function prejuizo(prestacao,juros, tempoAtraso){

    var valorPrestacao  = (prestacao +(prestacao*(juros/100)* tempoAtraso))
    return valorPrestacao.toFixed(2)
}

function valorJuros(valorPreju,prestacao){
   
    let total = valorPreju - prestacao; 
    return total.toFixed(2);
}


