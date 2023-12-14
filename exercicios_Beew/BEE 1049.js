var input = require('fs').readFileSync('stdin', 'utf8');
var [palavraA, palavraB, palavraC] = input.split('\r\n');

if (palavraA === 'vertebrado' && palavraB === 'ave' && palavraC === 'carnivoro') {
    console.log('aguia')
} else if (palavraA === 'vertebrado' && palavraB === 'ave' && palavraC === 'onivoro') {
    console.log('pomba')

} else if (palavraA === 'vertebrado' && palavraB === 'mamifero' && palavraC === 'onivoro') {
    console.log('homem')
} else if (palavraA === 'vertebrado' && palavraB === 'mamifero' && palavraC === 'herbivoro') {
    console.log('vaca')
} else if (palavraA === 'invertebrado' && palavraB === 'inseto' && palavraC === 'hematofago') {
    console.log('pulga')
} else if (palavraA === 'invertebrado' && palavraB === 'inseto' && palavraC === 'herbivoro') {
    console.log('lagarta')
} else if (palavraA === 'invertebrado' && palavraB === 'anelideo' && palavraC === 'hematofago') {
    console.log('sanguessuga')
} else if (palavraA === 'invertebrado' && palavraB === 'anelideo' && palavraC === 'onivoro') {
    console.log('minhoca')
}