// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

const area1 = prompt("digite uma altura")
const area2 = prompt("digite uma largura")

console.log(area1 * area2)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = prompt("Digite o ano atual")
const suaIdade = prompt("Digite sua idade")

console.log(anoAtual - suaIdade)
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  return peso / (altura * altura)

}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("digite seu nome")
const idade = prompt("digite sua idade")
const email = prompt("digite seu email")

console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  
const cor1 = prompt("digite uma cor")
const cor2 = prompt("digite mais uma cor")
const cor3 = prompt("digite uma terceira cor")

console.log([ cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase()




}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length
  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

let numero1 = array.pop()
let numero2 = array.splice(0,1)
array.push(numero2[0])
array.unshift(numero1)

return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
let ano1 = prompt("Em que ano estamos?")
let anoNascimento = prompt("Qual ano voce nasceu?")
let anoIdentidade = prompt("Em que ano sua identidade foi emitida?")

console.log(anoNascimento !== (ano1 <= anoIdentidade))
















}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}