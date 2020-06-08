const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'IPad Pro', preco: 4499, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 15, fragil: false},
]



const produtoCaro = produto => produto.preco > 2000
const produtoFragil = produto => produto.fragil

console.log(produtos.filter(produtoCaro).filter(produtoFragil))


//Código que eu construi
console.log(produtos.filter(function (p) {
    return p.preco > 2000 && p.fragil
}))