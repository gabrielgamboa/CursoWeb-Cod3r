function soma() {
    let soma = 0
    //arguments: array presente nas funções
    //vazio quando não há parâmetros
    for (i in arguments) {
        soma += arguments[i] 
    }
    return soma
}

//posso colocar n parâmetros
console.log(soma (1))
console.log(soma(1,2))
console.log(soma(3,3,3,3,3,3,3,3,3,3))
console.log(soma(3,3," teste")) //vai concatenar
console.log(soma("a","b","c"))