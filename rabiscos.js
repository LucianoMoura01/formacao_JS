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

valorEtanol = 4.50;
valorGasolina = 5.50;
combustivelNoMeuCarro = 'etanol';
kmPorLitroGasolina = 11;
kmPorLitroEtanol = 8;
distanciaViagem = 100;


valorDaviagemGasolina = (distanciaViagem / kmPorLitroGasolina) * valorGasolina;
valorDaviagemEtanol = (distanciaViagem / kmPorLitroEtanol) * valorEtanol;

console.log('Você fará uma viagem de ' + distanciaViagem + ' km, utilizando ' + combustivelNoMeuCarro + ' como combustível.');

if (combustivelNoMeuCarro === 'gasolina') {
    console.log('O valor da viagem é: ' + valorDaviagemGasolina);
} else if (combustivelNoMeuCarro === 'etanol') {
    console.log('O valor da viagem é: ' + valorDaviagemEtanol);
}