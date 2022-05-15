// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    const i = []
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const i = []
  return array.reverse()
  // DESAFIO
//   const i1 = []
//   var length = array.length;
//   var left = null;
//   var right = null;
//   for (left = 0, right = length - 1; left < right; left += 1, right -= 1) {
//     var temporary = array[left];
//     array[left] = array[right];
//     array[right] = temporary;
//   }
//   return array
  // Esse desafio ficou parecido com o que eu pesquisei, mas entendi como ele funciona!
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return  array.sort(function(a, b){return a- b})
  //
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const novaArray = array.filter((numero) => {
    return numero % 2 === 0
  })
  return novaArray
  // let numerosPares = [];
  // for (let i of array) {
  //     if (i % 2 === 0) {
  //         numerosPares.push(i)
  //     }
  // }
  // return numerosPares
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const novoArray = []
  for (let i of array){
    if (i % 2 === 0){
      const quadrado = Math.pow(i,2)
      novoArray.push(quadrado)
    }
  }
  return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return array.reduce(function(a, b){return Math.max(a, b)})
  // return Math.max(...array) // outra forma de fazer, bem mais curto
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  if (num1 >= num2){
    return {
        maiorNumero: num1,
        maiorDivisivelPorMenor: num1%num2 == 0,
        diferenca: num1 - num2
    }
} else {
    return {
        maiorNumero: num2,
        maiorDivisivelPorMenor: num2%num1 == 0,
        diferenca: num2 - num1
    }
}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
 const arrayPares = []
 for (i = 0; arrayPares.length < n; i++) {
   if (i % 2 === 0)
   arrayPares.push(i)
 }
  return arrayPares
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC){
    return `Equilátero`
  }
  else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
    return `Escaleno`
  
  }else {
    return `Isósceles`
  }
}


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array.sort(function(a, b){return a- b})
  const segundaPosicao = 1
  const penultimaPosicao = array.length -2
  const itemSegundaPosicao = array[segundaPosicao]
  const itemPenultimaPosicao = array[penultimaPosicao]
  return [itemPenultimaPosicao, itemSegundaPosicao] 
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const frase = (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`)
  return frase
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let pessoaAnonima = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort(function(a, b){return a.nome.localeCompare(b.nome)})
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  return consultas.sort(function(a, b){
    const primeiraData = a.dataDaConsulta.split('/').reverse().join("/")
    const segundaData = b.dataDaConsulta.split('/').reverse().join("/")
    return primeiraData.localeCompare(segundaData)
  })

} 