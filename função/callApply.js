function getPreco(imposto = 0, moeda ='R$') {
    return `${moeda} ${this.preco * (1-this.desc) * (1+imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco //msm coisa que getPreco: getPreco
}

//apenas chamando a função, ele entende o this se referindo
//ao escopo global, por isso retorna NaN.

//se eu quiser que isso não aconteça, faça isso:
global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())



const carro = {preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//contexto e dps os parâmetros da função
console.log(getPreco.call(carro,0.17,`$`))


//contexto e depois os parâmetros em um array
console.log(getPreco.apply(global, [0.17,`$`]))