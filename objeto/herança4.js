function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) //true
console.log(MeuObjeto.prototype === obj1.__proto__)//quando se cria um objeto por uma função construtora, 
//o proto do objeto irá apontar para SUAFUNÇÃO.prototype, e não Object.prototype

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia, meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //tira a referencia de Object.prototype para MeuObjeto.prototype
obj3.nome = 'OBJ3'
obj3.falar()


//Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__=== Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)