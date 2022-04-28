/* Exercícios de interpretação de código
1) 

a- Matheus Nachtergaele
   Virginia Cavendish
   canal: Globo, horario: 14h

2)

a- {nome: 'Juca', idade: 3, raca: 'SRD'}
   {nome: 'Juba', idade: 3, raca: 'SRD'}
   {nome: 'Jubo', idade: 3, raca: 'SRD'}

b- é uma sintaxe que permite copiar tudo referente a um objeto, podendo modificar o que existe em um objeto ou até mesmo adicionar algo a essa objeto.

3)

a- False
   undefined
   
b- O primeiro valor retornou um booleano, pois ele está atribuído ao objeto "backender" que está com valor declarado e o objeto "altura" retornou
um valor undefined pois nao está com nenhum valor atribuído a ele.
*/


////////////

// Exercícios de escrita de código

// 1) a-

let pessoinha = {
    nome: "Lucas",
    apelido: ["kinhas", "ferreira", "arruda"]
}

function frasepessoinha(pessoinha){
    let frase = (`Eu sou ${pessoinha.nome}, mas pode me chamar de: ${pessoinha.apelido[0]}, ${pessoinha.apelido[1]} ou ${pessoinha.apelido[2]}.`)
    return frase
}

console.log(frasepessoinha(pessoinha))

let novosApelidos = {
    ...pessoinha,
    apelido: ["orelhinha", "zoreba", "altao"]
}
console.log(frasepessoinha(novosApelidos))



/////////////

// 2) a-

let pessoa1 = {
    nome: "Rodrigo",
    idade: 24,
    profissao: "padeiro"
    }

let pessoa2 = {
   nome: "Lucas",
   idade: 23,
   profissao: "Entregador"
   }


// b- 


function dados (objeto) {
   let dadosPessoais = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
   return dadosPessoais


}
console.log(dados(pessoa1))
console.log(dados(pessoa2))


/////////////

//3) a-

let carrinho = []

//b-

let fruta1 = {
   nomeDaFruta1: "goiaba",
   estoque1: true
}

let fruta2 = {
   nomeDaFruta2: "maracuja",
   estoque2: true
}

let fruta3 = {
   nomeDaFruta3: "morango",
   estoque3: true
}

//c-

function mercado(estoque){
   carrinho.push(estoque)
   
}

mercado(fruta1)
mercado(fruta2)
mercado(fruta3)

console.log(carrinho)

////////////

//DESAFIO

//1- 

let meuNome = prompt("digite seu nome: ")
let minhaIdade = prompt("digite sua idade: ")
let minhaProfissao = prompt("digite sua profissao: ")

let eu = {
   nome: meuNome,
   idade: minhaIdade,
   profissao: minhaProfissao
}

function usuario(eu){
   return [eu]
}
console.log(eu)
console.log(typeof(eu))











