//função factory retorna um objeto

// factory simples:
function criarPessoa() {
    return  {
        nome:"Ana",
        sobrenome:"Silva"
    }
}

console.log(criarPessoa())




//criar uma função factory com parâmetros
function criarProduto(nome,preco) {
    return {
        nome, //mesma coisa que nome: nome
        preco,// mesma coisa que preco: preco
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook',2199.49))

const {nome:n,sobrenome:s} = criarPessoa() //apenas testei o destructuring
console.log(n,s)