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


class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC() {
        const imc = this.peso / (this.altura * this.altura);
        console.log(`O IMC de ${this.nome} é ${imc.toFixed(2)}`);
        return imc;
    }

}

const luciano = new Pessoa('Luciano', 65, 1.80);
const debora = new Pessoa('Débora', 64, 1.50);

luciano.calcularIMC();

Array
===========================================


const Pessoas = [
    {
        nome: 'Luciano',
        peso: 65,
        altura: 1.80
    },
    {
        nome: 'Débora',
        peso: 64,
        altura: 1.50
    }
];

function calcularIMC(pessoa) {
    const imc = pessoa.peso / (pessoa.altura * pessoa.altura);
    console.log(`O IMC de ${pessoa.nome} é ${imc.toFixed(2)}`);
    return imc;
}

Pessoas.forEach(calcularIMC);

===========================================


const alunos = [];

alunos.push('Luciano');
alunos.push('Débora');
alunos.push('Maria');
alunos.push('João');
alunos.push('José');

console.log(alunos);


For / estrutura de repetição
===========================================


const notas = [];

notas.push(8);
notas.push(7);
notas.push(9);
notas.push(6);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(`A média das notas é ${media.toFixed(2)}`);

===========================================


const brincandoComFor = [1];

let soma = 0;

for (let i = 0; i <= 1000; i++) {
    brincandoComFor.push(i);
    soma = soma + i;
}

const somaTudoEMultiplica = soma * brincandoComFor.length;
console.log(`A soma de todos os números de 0 a 1000 é ${soma} e a multiplicação da soma pela quantidade de números é ${somaTudoEMultiplica}`);

Aprendendo a importar arquivos
===========================================


const {gets, print} = require ('./arquivosImport/aprender-importar');

console.log(gets());
print('Olá, mundo!');

===========================================
*/

