/*
Imprimir
===========================================
console.log ('bora pra cima papai!');

utilizando if / else
===========================================

const numero = 2;

const numeroPar = (numero % 2) === 0;

if (numeroPar) {
 console.log('O número é par');
} else {
    console.log('O número é ímpar');
}

codigo determinando gastos
===========================================

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

Exercicios de funçoes
===========================================

function escreverNome(nome){
    console.log ('Meu nome é ' + nome)
};

escreverNome('Luciano');
escreverNome('Débora')

Funçao para conferir a idade
===========================================

function conferenciaDeIdade(idade){
    if (idade>=18) {
        console.log('Você é maior de idade!');
    } else {
        console.log('Você é menor de idade!');
} 
};

conferenciaDeIdade(18);
conferenciaDeIdade(17);


Objetos, Classes e Instâncias
===========================================

class pessoa {
    nome;
    idade;
    dataDeNascimento;

    constructor(nome, dataDeNascimento){
        this.nome = nome;
        this.idade = (new Date().getFullYear()) - (new Date(dataDeNascimento).getFullYear());
        this.dataDeNascimento = dataDeNascimento;
    }

    descreverPessoa() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const luciano = new pessoa('Luciano Moura', '1999-10-04');
const debora = new pessoa('Débora Moura', '1996-12-21');

console.log(luciano);
debora.descreverPessoa();

===========================================
*/