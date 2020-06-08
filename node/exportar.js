console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null //é uma outra variável que aponta pro mesmo objeto, então não tem importancia colocar null
console.log(module.exports)

exports = { // apenas estou mudando a referencia, e não o valor padrão
    nome: 'Teste'
}

console.log(module.exports)

module.exports = {
    publico: true
}


//o THIS e o EXPORTS são apenas referencias de MODULE.EXPORTS, os 3 apontam pro mesmo objeto
//porém é o MODULE.EXPORTS que exporta as coisas