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

Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 a 100. Faça um programa que receba os números sorteados para cada aluno e imprima o número do aluno com o maior número sorteado.

Dados de entrada:
5
50
10
98
23

Saída:
98


const numerosSorteados = [5, 50, 10, 98, 23];

let maiorNumero = numerosSorteados[0];

for (let i = 0; i <= numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorNumero) {
        maiorNumero = numeroSorteado;
    }
}

console.log(maiorNumero);


===========================================
Faça um programa que receba a média de um aluno.
Caso a média seja < 5, imprima "Reprovado"
Caso a média seja >= 5 e < 7, imprima "Recuperação"
Caso a média seja >= 7, imprima "Aprovado"


const nota = [9, 6, 8, 5, 7];
let soma = 0;

for (let i = 0; i < nota.length; i++) {
    const notaAtual = nota[i];
    soma = soma + notaAtual;
}

const media = soma / nota.length;

if (media < 5) {
    console.log(`Este aluno está Reprovado, pelo motivo de estar com a média ${media.toFixed(2)}`);
}
else if (media >= 5 && media < 7) {
    console.log(`Este aluno está em Recuperação, pelo motivo de estar com a média ${media.toFixed(2)}`);
}
else if (media >= 7) {
    console.log(`Este aluno está Aprovado, o aluno finalizou com a média ${media.toFixed(2)}`);
}

===========================================
Faça um programa que receba N (quantidade de numeros) e seus respectivos valores e Imprima o maior número par e o menor número impar.

Exemplo de entrada:
5
3
4
1
10
8

Saida:
Maior número par: 10
Menor número impar: 1


const numeros = [5, 3, 4, 1, 10, 8];
let maiorNumeroPar = (0);
let menorNumeroImpar = (0);

for (let i=0; i < numeros.length; i++) {
    const numeroAtual = numeros[i];
    if (numeroAtual % 2 === 0) {
        if (numeroAtual > maiorNumeroPar || maiorNumeroPar === 0) {
            maiorNumeroPar = numeroAtual;
        }
    }
    else {
        if (numeroAtual < menorNumeroImpar || menorNumeroImpar === 0) {
            menorNumeroImpar = numeroAtual;
        }
    }
}

console.log(`Maior número par: ${maiorNumeroPar}`);
console.log(`Menor número impar: ${menorNumeroImpar}`);



===========================================
Imposto sobre Soldo Bruto
De R$ 0.00 a R$ 1100.00 = 5.00%
De R$ 1100.01 a R$ 2500.00 = 10.00%
Acima de R$ 2500.00 = 15.00%


const {impostoSobreSoldo, salarioLiquido} = require('./arquivosImport/calculo-imposto');

const salarioBruto = 2000;
const adicionalBeneficios = 250;

const imposto = impostoSobreSoldo(salarioBruto);
const salarioFinal = salarioLiquido(salarioBruto, imposto, adicionalBeneficios);

console.log(`O salário líquido é R$ ${salarioFinal.toFixed(2)}, considerando o salário bruto de R$ ${salarioBruto.toFixed(2)}, o imposto de R$ ${imposto.toFixed(2)} e os benefícios adicionais de R$ ${adicionalBeneficios.toFixed(2)}`);


===========================================


//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.


let media = parseFloat(gets());

if (media < 5) {
  print('Reprovado');
} else if (media < 7) {
  print('Recuperação');
} else {
  print('Aprovado');
}


===========================================

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

const N = parseInt(gets(), 10);
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;
for (let i = 0; i < N; i++) {
  const numero = parseInt(gets(), 10);

  if (numero % 2 === 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  } else {
    if (numero < menorNumeroImpar || menorNumeroImpar === 0) {
      menorNumeroImpar = numero ;
    }
  }
}

print(`Maior número par: ${maiorNumeroPar}`);
print(`Menor número impar: ${menorNumeroImpar}`);


===========================================
*/

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Função útil para o calculo do imposto (baseado nas aliquotas).

function impostoSobreSoldo (salarioBruto) {
    let imposto = 0;

    if (salarioBruto  <= 1100.00) {
        imposto = salarioBruto * 0.05;
    } else if (salarioBruto >= 1100.01 && salarioBruto <= 2500.00) {
        imposto = salarioBruto * 0.10;
    } else {
        imposto = salarioBruto * 0.15;
    }

    return imposto; 
}

function salarioLiquido (salarioBruto, imposto, adicionalBeneficios) {
    return salarioBruto - imposto + adicionalBeneficios;
}

const salarioBruto = parseFloat(gets());
const adicionalBeneficios = parseFloat(gets());

const imposto = impostoSobreSoldo(salarioBruto);
const salarioFinal = salarioLiquido(salarioBruto, imposto, adicionalBeneficios)


const saida = salarioFinal;
print(saida.toFixed(2));