const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

const paraObjetos = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjetos).map(apenasPreco)
console.log(resultado)


// MEU CÓDIGO:

const meuArrayCriado = carrinho.map(function(objetoCarrinho) {
    let obj = JSON.parse(objetoCarrinho)
    return obj.preco
})

console.log(meuArrayCriado)