
function somaPares(numeros) {
    return numeros.filter(num => num % 2 === 0).reduce((soma, num) => soma + num, 0);
    
}
console.log(somaPares([4,10,12, 15, 16, 25, 88]));

function filtrarPalavras(palavras) {
    return palavras.filter(palavra => palavra.length > 4);
}

console.log(filtrarPalavras(["life", "strange", "eu", "morte", "lua", "quando", "vez"])); 

function contarcorrencias(numeros, numeroBuscar) {
    return numeros.filter(num => num === numeroBuscar).length;
}
console.log(contarcorrencias([1, 2, 3, 4, 2, 2, 5], 2)); 

function multiplicararray(numeros, multiplicador) {
    return numeros.map(num => num * multiplicador);
}
console.log(multiplicararray([1, 2, 3], 4)); 

function fraseinvertida(frase) {
    return frase.split(' ').reverse().join(' ');
}
console.log(fraseinvertida("Eu sou o Hollow Knight")); 

