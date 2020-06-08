const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13 //pares chave:valor
}

console.log(Object.keys(pessoa)) //pega as keys
console.log(Object.values(pessoa)) //pega os valores das keys
console.log(Object.entries(pessoa))//divide os pares em sub-arrays

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave} : ${valor}`)
})


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //pode ser listada quando solicitada
    writable: false, //não pode ser alterada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'//n funciona pq writable = false
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assing {ECMAScript 2015}

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3,a:4}

const obj = Object.assign(dest,o1,o2) //concatena os objetos para o primeiro parâmetro
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)

