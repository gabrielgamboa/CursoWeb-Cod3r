const ferrari = {
    modelo: 'F40',
    veloMax: 324
}

const volvo = {
    modelo: 'V40',
    veloMax: 200
}


console.log(ferrari.prototype) //não possui o atributo prototype
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) //representa o Object prototype
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)//não possui um protótipo no prototype da função


function MeuObjeto() {}

console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

