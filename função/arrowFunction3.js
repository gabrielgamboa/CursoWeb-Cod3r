let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global) //this aponta pro objeto global em uma função normal. True

const obj = {}
comparaComThis = comparaComThis.bind(obj)//this aponta para o obj

comparaComThis(global) //false
comparaComThis(obj) //true


// --------------------------------------------------------------------------


let comparaComThisArrow = (param) => console.log(this === param)
//o this foi escrito dentro do módulo

comparaComThisArrow(global) //false
comparaComThisArrow(module.exports) //true


// ---------------------------------------------------------------------------


comparaComThisArrow = comparaComThisArrow.bind(obj) //o bind nao altera a referencia do this da arrow function
comparaComThisArrow(obj) //false
comparaComThisArrow(module.exports) //true

