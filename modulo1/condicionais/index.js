/* Exercícios de interpretação de código
1) 

a- o comando IF tem como funcao verificar SE algo comparado a outra coisa é verdadeiro, caso contrario nao seja, ele entra no comando ELSE.
b- Todos os numeros DIVISIVEIS por 2 e que forem iguais a 0
c- Todos os numeros que NAO SAO DIVISIVEIS por dois e que nao serao iguais a 0 

2)

a- O comando Switch Case tem como funcao simplificar o que o comando IF ELSE faz, ele reduz as linhas de comando tornando o codigo menos extenso
b- o preco da fruta maca é R$2.25.
c- O preço da fruta  pera  é  R$  5 

3)

a- Ele está pedindo ao usuario um numero, e o NUMBER antes do prompt converte uma string em numero, caso ele tente colocar algo que nao seja um numero, terá como resultado "NaN"
b- Esse número passou no teste | irá imprimir um erro
c- Sim, pois o que está de baixo do console.log nao é um ELSE pois se for um numero menor que 0, ele imprima outro resultado. 


Exercícios de escrita de código*/

// 1)

let idade1 = Number(prompt('Me diga a sua idade: '))

if(idade1 > 18){
    console.log("Parabéns, voce ja pode tirar sua habilitacao")
  } else {
        console.log("Poxa, voce ainda nao tem a idade permitida para tirar a sua habilitacao.")
    }

// 2)


let turnoComando = prompt("Voce é de qual turno? Digite M (matutino), ou V (Vespertino) ou N (Noturno) ")

if(turnoComando === "M"){
    console.log("Bom Dia!")
}   else if(turnoComando === "V"){
    console.log("Boa Tarde!")
}   else{
    console.log("Boa Noite!")
}

// 3)

let turno = prompt("Voce é de qual turno? Digite M (matutino), ou V (Vespertino) ou N (Noturno) ")

switch(turno){
    case "M" :
        console.log("Bom dia!")
        break;
        case "V" :
            console.log("Boa tarde!")
            break;
            case "N" :
                console.log("Boa Noite!")
                break;
                default:
                console.log("Voce ainda nao é um de nossos estudantes.")

}

//4)

let generoFilmes = prompt("Qual o genero que voce quer assistir hoje?")
let valorIngresso = Number(prompt("Quanto custa o ingresso?"))

if(generoFilmes === "fantasia" && valorIngresso <= 15){
    console.log("Bom filme!")
  }else{
      console.log("Escolha outro filme :( ")
  }


// DESAFIOS

//1)

let generoFilmesDesafio = prompt("Qual o genero que voce quer assistir hoje?")
let valorIngressoDesafio = Number(prompt("Quanto custa o ingresso?"))
let lanchinhoDesafio = prompt("Voce vai comer o que?")


if(generoFilmesDesafio === "fantasia" && valorIngressoDesafio <= 15 && lanchinhoDesafio){
    console.log(`Bom filme e aproveite seu(sua) ${lanchinhoDesafio} !!!` )
  }else{
      console.log("Escolha outro filme :( ")
  }

//2)
