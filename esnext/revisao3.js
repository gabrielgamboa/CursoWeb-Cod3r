// ES8:  Object.values e .entries

const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj)) //array com arrays de chave e valor

// Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome, //cria sem precisar colocar nome:nome
    ola() { //nao precisa mais colocar "function()"
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())


// Classes

class Animal {}

class Cachorro extends Animal {
    falar() {
        return 'Au au'
    }
}


console.log(new Cachorro().falar())