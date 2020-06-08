const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //retorna uma função e precisa ser executada
const contadorD = require('./instanciaNova')()


contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)//o module.exports mantém o obj em Cache, permitindo apenas uma unica instancia

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor, contadorC.valor)//retornando uma função factory, é permitido outras novas instâncias



