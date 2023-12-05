// Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo,
//  calcule o perímetro do triângulo e apresente a mensagem:
// Perimetro = XX.X
// Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem
// Area = XX.X
// Entrada
// A entrada contém três valores reais.
// Saída
// O resultado deve ser apresentado com uma casa decimal.
var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

var [a, b, c] = lines.shift().split(' ').map(Number)

if (a + b > c && a + c > b && b + c > a) {
    let per = a + b + c
    console.log(`Perimetro = ${per.toFixed(1)}`)
} else {
    let area = ((a + b) * c) / 2
    console.log(`Area = ${area.toFixed(1)}`)
}