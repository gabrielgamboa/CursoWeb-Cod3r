const sequence = {
    _id: 1,
    get id() { return this._id++}
}

const produtos = {}


//update
function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto 
    return produto
}


//read 
function getProduto(id) {
    return produtos[id] || {}
}


//read
function getProdutos() {
    return Object.values(produtos)
}


//delete
function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}


module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto}