const { match } = require('assert');

var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

let [a, b, c] = lines.shift().split(" ").map(parseFloat)
let delta = Math.pow(b, 2) - (4 * a * c);
let base = 2 * a;

if (delta < 0 || base == 0) {
    console.log("Impossivel calcular")
} else {

    let r1 = (-b + Math.sqrt(delta)) / base;
    let r2 = (-b - Math.sqrt(delta)) / base;

    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
}
