/* Exercicio 1
 Questão 1. 
10
10, 5
Questão 2. 
10, 10, 10
Questão 3.
horaTrabalho
diariaTrabalho
*/

// Exercicio 2
let nome 
let idade
console.log(typeof nome, typeof idade) // Ele imprimiu na tela o valor "undefined" por conta que as variaveis criadas nao contém nenhum valor atribuído.

//////////


nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")
console.log(typeof nome, typeof idade) // Ele imprimiu na tela o valor "string string" por ter tido atribuição nas variaveis.

//let nome = prompt("Qual é o seu nome?")
//let idade = prompt("Qual é a sua idade?")
console.log("Olá", nome, "você tem", idade, "anos de idade")

//////////

let pergunta1 = prompt("Voce trabalhou hoje?")
let pergunta2 = prompt("Voce gostou do seu dia?")
let pergunta3 = prompt("Voce almocou hoje?")
console.log("Voce trabalhou hoje? -", pergunta1)
console.log("Voce gostou do seu dia? -", pergunta2)
console.log("Voce almocou hoje? -", pergunta3)

//////////

let a = 10
let b = 25
let c = a
a = b
b = c
console.log("O novo valor de a é : ", a)
console.log("O novo valor de b é : ", b)

