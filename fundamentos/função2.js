const imprimirSoma = function (a, b) {  //armazena a função em uma variavel
    console.log(a + b)
}

imprimirSoma(2, 2)


const soma = (a, b) => { //armazenando uma função arrow em uma variável
    return a + b
}
console.log(soma(2, 3))

const subtracao = (a, b) => a - b //retorno implícito
console.log(subtracao(2, 3), typeof subtracao)

const imprimir = a => console.log(a)
imprimir('legal!')