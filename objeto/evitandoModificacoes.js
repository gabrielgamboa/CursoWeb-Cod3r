//Object.preventExtensions (n vai conseguir adicionar atributos)

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensível:' , Object.isExtensible(produto))


//pode ser modificado tranquilamente, também deletado
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


//Object.seal


//na consegue adicionar e nem excluir, mas modificar sim
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log("Selado: ", Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)



// Object.freeze = selado + valores constantes
