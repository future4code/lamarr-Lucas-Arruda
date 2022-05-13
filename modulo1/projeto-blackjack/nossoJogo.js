if(confirm("Quer iniciar um novo jogo?")){
   console.log("Bem-vindo(a) ao BlackJack!")
}else{
   console.log("O jogo acabou!")

}

let cartaUsuario1 = comprarCarta()
let cartaUsuario2 = comprarCarta()
let cartaPc1 = comprarCarta()
let cartaPc2 = comprarCarta()

let Usuario = console.log(`Usuario - cartas: ${cartaUsuario1.texto} e ${cartaUsuario2.texto}, pontuacao ${cartaUsuario1.valor + cartaUsuario2.valor}`)
let Computador = console.log(`Computador - cartas: ${cartaPc1.texto} e ${cartaPc2.texto}, pontuacao ${cartaPc1.valor + cartaPc2.valor}`)


let cartasUser = cartaUsuario1.valor + cartaUsuario2.valor
let cartasPc = cartaPc1.valor + cartaPc2.valor


if(cartasUser > cartasPc){
   console.log("O usuário ganhou!")
} else if (cartasUser < cartasPc) {
  console.log("O computador ganhou!")
}else {
   console.log('empate!')
}














