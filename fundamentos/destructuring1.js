//introduzido no ECMASCRIPT 2015    

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1008
    }
}

const {nome,idade} = pessoa
//pegar o nome e a idade do objeto pessoa
console.log(nome,idade)

const {nome:n,idade:i} = pessoa
//funciona como um "alias"

console.log(n,i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome,bemHumorada)

const {endereco: {logradouro, numero, cep }} = pessoa
console.log(logradouro,numero,cep)  