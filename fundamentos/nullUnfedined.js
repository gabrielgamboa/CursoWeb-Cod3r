let valor  //não inicializada
console.log(valor)

valor = null //não aponta pra mais nenhum lugar
console.log(valor)
//console.log(valor.toString())  vai dar erro 

const produto = {}
console.log(produto.preco)  //preço não está definido dentro do produto, mas existe
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined. Se quiser limpar numéricos coloque o valor 0.
console.log(!!produto.preco)
console.log(produto)

//delete produto.preco para deletar o atributo


produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)