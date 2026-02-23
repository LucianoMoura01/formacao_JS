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

    constructor(nome, idade, dataDeNascimento){
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

class Pessoa {
    nome;
    idade;
    dataDeNascimento;

    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.dataDeNascimento = (new Date().getFullYear()) - idade;
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`);
    }
}

const luciano = new Pessoa('Luciano', 29);
const debora = new Pessoa('Débora', 29);

compararPessoas(luciano, debora);


===========================================

class Carro {
    marca;
    modelo;
    cor;
    gastoMedioPorKm;

    constructor(marca, modelo, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    gastoPercurso(distanciaEmKm, precoCombustivel) {
        const litrosConsumidos = distanciaEmKm / this.gastoMedioPorKm;
        const gastoTotal = litrosConsumidos * precoCombustivel;
        console.log(`Com o ${this.marca} ${this.modelo} terá um gasto total para percorrer ${distanciaEmKm} km é de R$ ${gastoTotal.toFixed(2)}`);
        return gastoTotal;
    }
}

const clio = new Carro('Renault', 'Clio', 'prata', 12);
const sandero = new Carro('Renault', 'Sandero Stepway', 'preto', 11);
const xsara = new Carro('Citroen', 'Xsara', 'preto', 9);
const escort = new Carro('Ford', 'Escort', 'preto', 6);
const distanciaEmKm = 360;
const precoCombustivel = 6.60;

clio.gastoPercurso(distanciaEmKm, precoCombustivel);
sandero.gastoPercurso(distanciaEmKm, precoCombustivel);
xsara.gastoPercurso(distanciaEmKm, precoCombustivel);
escort.gastoPercurso(distanciaEmKm, precoCombustivel);

===========================================
*/