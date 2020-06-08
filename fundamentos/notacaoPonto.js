console.log(Math.ceil(6.1)) //arredonda p cima
console.log(Math.floor(6.1)) //arredonda p baixo

const obj1 = {}
obj1.nome = 'bola'
//obj1['nome'] = 'bola2'

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome //deixa nome visivel para fora da função
    this.exec = function() {
        console.log("Exec")
    }
}

const obj2 = new Obj('Cadeira') //
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()