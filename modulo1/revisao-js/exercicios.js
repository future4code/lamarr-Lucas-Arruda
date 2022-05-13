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

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
 
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
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
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}