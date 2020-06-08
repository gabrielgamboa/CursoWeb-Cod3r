//middleware pattern (chain of responsability)

const passo1 = (contexto, next) => { //contexto: objeto
    contexto.valor1 = 'mid1'
    next()
}


const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}


const passo3 = contexto => contexto.valor3 = 'mid3'


const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](contexto, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const contexto = {}
exec(contexto, passo1, passo2, passo3) //se colocarmos por primeiro o passo3, so ira executar ele
//pois ele não chama o next
console.log(contexto)


