const prompt = require('prompt-sync')();

function calculaMedia(n1,n2,n3){
var media = ((n1*1) + (n2*3) +(n3*3))/6
return media;
}

var nota = parseFloat(prompt('Digte a primeira nota: '))

var nota2 = parseFloat(prompt('Digte a primeira nota: '))

var nota3 = parseFloat(prompt('Digte a primeira nota: '))

var resultado = calculaMedia(nota,nota2,nota3)
console.log(resultado.toFixed('2'))
