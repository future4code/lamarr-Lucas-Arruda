/* Exercícios de interpretação de código
a . undefined
b . null
c . 11
d . 3
e . [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f . 9  


SUBI NUM ONIBUS PARA MIRROCOS. 27 */

// Exercícios de escrita de código

// let nomeUsuario = prompt("Qual é o seu nome?")
// let emailUsuario = prompt("Agora, digite seu email:")

// console.log(`O email do ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo ${nomeUsuario}!`)



///////////////


let comidas = ["lasanha", "brigadeiro", "pure", "strogonofe", "pudim"]

console.log(comidas)
console.log("Essas sao as minhas comidas favoritas", [comidas])
console.log("Antes: ", comidas)

let comidas1 = prompt("Me informe uma comida favorita sua: ")

comidas[comidas1+1] = comidas
console.log("depois: ", comidas)


//////////////


let listaDeTarefas = []
let tarefa1 = prompt("Informe sua primeira tarefa diaria: ")
let tarefa2 = prompt("Informe sua segunda tarefa diaria: ")
let tarefa3 = prompt("Informe sua terceira tarefa diaria: ")


listaDeTarefas = [tarefa1, tarefa2, tarefa3]


console.log("Antes: ",listaDeTarefas)

let indice = prompt("Escolha um numero de 1 até 3")

listaDeTarefas.splice(indice-1,1);

console.log("Depois: ",listaDeTarefas)


/////////////

//Desafio

let frase1 = prompt("Digite uma frase")

console.log(frase1.split(" "))

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(frutas.indexOf("Abacaxi"), frutas.length)























 






















































