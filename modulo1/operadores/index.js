/* Exercícios de interpretação de código
1.

resultado 1 - false
resultado 2 - false
resultado 3 - true
resultado 4 - boolean

2.

Por conta de nao ter valor atribuido no comando dado, o mesmo reconhece como uma string ao solicitar para o usuario
algum tipo de numero e o comando dado ao invés de somar ele está juntando os valores.

3.

let primeiroNumero = 1
let segundoNumero = 2

let soma = primeiroNumero + segundoNumero

console.log(soma)*/


///////


// Exercícios de escrita de código

let minhaIdade = prompt("Qual é a sua idade?")
let idadeAmigo = prompt("Qual a idade do seu amigo?")

console.log( minhaIdade > idadeAmigo)

let comparacao = minhaIdade - idadeAmigo
console.log(comparacao)
console.log(typeof comparacao)


//////////

let numeroPar = prompt("Informe um numero par")
let divisao = numeroPar % 2

console.log(numeroPar % 2)// O resto sempre será igual a "0", pois em todas os numeros pares impressos foram dividos por "2" e isso resulta em uma divisao exata
console.log(typeof divisao)// O resto da divisao nao será uma divisao exata, sendo isso, nao sera o resultado igual a "0".


///////////

let idade1 = prompt("Voce tem quantos anos de idade?")
let meses = 12
let dias = 365
let horas = 24

let idadeMeses = idade1 * meses
let idadeDias = idade1 * dias
let idadeHoras = idade1 * (dias * horas)


console.log(idadeMeses);
console.log(idadeDias);
console.log(idadeHoras);


////////////


let numero1 = prompt("informe um numero:")
let numero2 = prompt("informe mais um numero:")

console.log(numero1 > numero2);
console.log(numero1 === numero2);
console.log((numero1 % numero2) == 0 );
console.log((numero2 %  numero1) == 0);








