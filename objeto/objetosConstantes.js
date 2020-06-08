//pessoa -> endereço 123 -> {...}^
const pessoa = {nome: "João"}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> endereço 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) //não deixa modificar nem mesmo os atributos

pessoa.nome = 'Marina'//não vai dar erro
pessoa.endereco = ' Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)//impede de modificar o objeto
//em qualquer aspecto

const pessoaConstanteEmTudo = Object.freeze({nome:'Ana'})
pessoaConstanteEmTudo.nome = 'Maria'
console.log(pessoaConstanteEmTudo)