const saudacao = 'opaa' //contexto léxico

function exec() {
    const saudacao = 'falaa'  //contexto léxico 2
    return saudacao //se eu comentar saudacao da função, procura a que esta no outro contexto
}


//OBJ são grupos aninhados de chave/valor

const Cliente = {
    nome: "Pedro",
    idade:32,
    peso:80,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente.endereco.logradouro)
