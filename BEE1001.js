// Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo 
// o seu resultado na variável X. Imprima X conforme exemplo apresentado abaixo. Não apresente 
// mensagem alguma além daquilo que está sendo especificado e não esqueça de imprimir o 
// fim de linha após o resultado, caso contrário, você receberá "Presentation Error". 

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

//outra forma de resolver o problema é: criar um arrai
//var linnes[a,b] = lines.split(' ');
let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());

let x = a + b;
console.log(`X = ${x}`)


