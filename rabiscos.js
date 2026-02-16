/*
console.log ('bora pra cima papai!');

===========================================

const numero = 2;

const numeroPar = (numero % 2) === 0;

if (numeroPar) {
 console.log('O número é par');
} else {
    console.log('O número é ímpar');
}

===========================================
*/

const valorEtanol = 4.50;
const valorGasolina = 5.50;
let combustivelNoMeuCarro = 'etanol';
const kmPorLitroGasolina = 11;
const kmPorLitroEtanol = 8;
const distanciaViagem = 100;

const valorDaviagemGasolina = (distanciaViagem / kmPorLitroGasolina) * valorGasolina;
const valorDaviagemEtanol = (distanciaViagem / kmPorLitroEtanol) * valorEtanol;

console.log('Você fará uma viagem de ' + distanciaViagem + ' km, utilizando ' + combustivelNoMeuCarro + ' como combustível.');

if (combustivelNoMeuCarro === 'gasolina') {
    console.log('O valor da viagem é: ' + valorDaviagemGasolina);
} else if (combustivelNoMeuCarro === 'etanol') {
    console.log('O valor da viagem é: ' + valorDaviagemEtanol);
}