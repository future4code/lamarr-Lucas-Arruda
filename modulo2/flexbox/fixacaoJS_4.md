```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let contador = 0
    for (i=0; i<arrayDeNumeros.length; i++ ) {
      if (arrayDeNumeros[i] === numeroEscolhido) {
        contador = contador + 1
      }
    }
    if(contador === 0){
      return `Número não encontrado`
    } else {
      return `O número ${numeroEscolhido} aparece ${contador}x`
    }
  }