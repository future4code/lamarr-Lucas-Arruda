 /* Exercícios de interpretação de código
 1) O codigo está pegando o resultado atribuido a "valor" e esta dando "voltas" até o valor de "i" ser 10, pois os valores estao sendo somados
 o resultado que sera impresso, será 10.
 
 2) a- 19, 21, 23, 25, 27, 30
    b- Sim, iria precisar usar o comando console.log(indexOf(numero)).
 3) Ele imprimiria a quantidade de asteristicos até 4, tipo: *, **, ***, **** em linhas diferentes. */

 // Exercícios de escrita de código

 //1) 

//  let quantidadeDeBichinhos = Number(prompt("Quantos animais de estimacao voce tem?"))
//  let bichos1 = []
//  if(quantidadeDeBichinhos === 0){
//      console.log(`Que pena! Você pode adotar um pet!`)
//  }else if(quantidadeDeBichinhos > 0)
//    for(let i = 0; i < quantidadeDeBichinhos; i++){
//     bichos1[i] = prompt("Qual é o nome do seu pet?")
// }

//    console.log(bichos1)

///////////

// 2)

// a)
let arrayOriginal = [25, 47, 70, 23, 42, 15, 24, 10, 12]

function numerosArray(){
    for( let lista of arrayOriginal) {
        console.log(lista)
    }
}
numerosArray()

// b)
for( let lista of arrayOriginal){
    console.log(lista/10)
}
numerosArray()

// c)
let pares = []
for( let lista = 0; lista < arrayOriginal.length; lista++ ){
    if(arrayOriginal[lista] % 2 === 0 )
    pares.push(arrayOriginal[lista])
  }
console.log(pares)


// d)
let array1 = []
for( let i = 0; i < arrayOriginal.length; i++){
array1 = [`O elemento do índex ${i} é ${arrayOriginal[i]}`]
console.log(array1)
}

// e)
// let maiorNumero = 0
// let menorNumero = maiorNumero
// for( let i = 0; i < arrayOriginal.length; i++){
//     }
//     console.log(`o maior numero é ${i}, e o menor numero é ${arrayOriginal}`) // nao consegui compreender essa questao Pati, se puder me explicar ela novamente, eu agradeco. Vou enviar desta forma por conta da hora.




