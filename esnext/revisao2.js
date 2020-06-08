//ArrowFuncion com o this
const lexico1 = _ => console.log(this === exports) //true
const lexico2 = lexico1.bind({})

lexico1()
lexico2()


//Parametro default
function log(texto = 'node') {
    console.log(texto)
}

log(null)
log('Eu sou mais forte')



//Operador Rest
function total(...numeros) {
    const soma = numeros.reduce((incremento, atual) => {
        return incremento + atual
    })
    return soma
}

console.log(total(2,4,6))



