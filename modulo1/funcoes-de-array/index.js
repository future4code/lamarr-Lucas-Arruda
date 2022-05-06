/* Exercícios de interpretação de código
1) a- Ele vai imprimir o nome e o apelido de cada indice separado para cada um dos indices. exemplo "{nome: `Amanda Rangel`, apelido: `Mandi`}

2) a- Ele vai usar a funcao callback usando o map apenas retornando o nome de cada indice dentro de uma nova array.

3) a- Ele vai usar a funcao callback usando dessa vez o filter e vai retornar dentro de uma nova array os nomes e os apelidos que forem diferentes do que foi digitado, no caso, Chijo.*/

// Exercícios de escrita de código

// 1) a-

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

function nomeDosBichos(doguinhos, indice, array){
    return doguinhos.nome

}
let nomeDosDoguinhos=pets.map(nomeDosBichos)
console.log(nomeDosDoguinhos)

// b- 

function doguinhosSalsichas(osSalsichas){
    return osSalsichas.raca==="Salsicha"

}

let salsichas = pets.filter(doguinhosSalsichas)
console.log(salsichas)

// c-

const novoPet = pets.filter((item) => {
    return item.raca === 'Poodle'

}).map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`

})

console.log(novoPet)

///////

// 2) a-

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

const arrayA = produtos.map((horta) => {
    return horta.nome
})

console.log(arrayA);


/////////

// b-

const arrayB = produtos.map((item) => {
    return {
        nome: item.nome,
        preço: (item.preco - (item.preco / 20)).toFixed(2)
    }
})
console.log(arrayB);

/////////

// c-

const arrayC = produtos.filter((item) => {
    return item.categoria==='Bebidas'
})

console.log(arrayC);

/////////

// d-

const arrayD = produtos.filter((item) => {
    return item.nome.includes("Ypê")

})

console.log(arrayD);

/////////

const arrayE = produtos.filter((item) => {
    
    return item.nome.includes("Ypê")


}).map((item) => {
    return `compre ${item.nome} por ${item.preco}.`


})

console.log(arrayE);

//////////////


// DESAFIOS

// 1) a-

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

const arrayF = pokemons.map((item) => {
    return item.nome;
})

console.log(arrayF.sort())

