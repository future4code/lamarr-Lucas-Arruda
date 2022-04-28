/* Exercícios de interpretação de código
1. 
a) 10 , 50

b) o codigo ira rodar sem problemas, mas nao irá imprimir nada na tela pois a funcao console.log() nao foi adicionado

2. 
a) a funcao toLowerCase() deixa algum caractere especifico minusculo e a funcao includes() permite verificar se um determinado caractere está dentro da string
b) True, true, true
*/

/////////



// Exercícios de escrita de código
//1) a.
function informacao(){
	return `Eu sou Lucas, tenho 23 anos, moro em Rio de Janeiro e sou programador.`
}
console.log(informacao())


// b.

function dados(nome, idade, estado, profissao){

	return `Eu sou ${nome}, tenho ${idade} anos, moro em ${estado} e sou ${profissao}`
}

console.log(dados("Lucas", 20, "Rj", "Programador"))

///

// 2) a.
function soma(num1, num2){

    return num1 + num2
}
console.log(soma(5, 10))

//b.

 function diferenca(num3, num4){
	 return num3 >= num4
 }
console.log(diferenca(7, 3))

//c.



function par(num5){
	let divisao = num5 % 2
	return divisao == 0
}
console.log(par(10))


//d.

function frase(string){
	return `${string.length}, ${string.toUpperCase()}`
}
console.log(frase(`Eu sou uma pessoa feliz.`))

//3)

function matematica(soma, subtracao, multiplicacao, divisao1){
let digito1 = prompt("digite um numero")
let digito2 = prompt("digite o segundo numero")
} // questao incompleta









