const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha = Object.create(pai) //Cria um objeto usando de protótipo o PAI. Não printa no console atributos recebidos por herança
filha.nome = 'Ana' //se comentarmos essa linha, a linha 15 nao irá printar pois ele não lista por padrao os atributos recebidos por herança 
console.log(filha.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? //saber se um atributo é do próprio objeto ou foi recebido por herança
    console.log(key) : console.log(`Por herança: ${key}`)
}