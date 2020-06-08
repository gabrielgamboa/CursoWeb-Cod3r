//transformei a classe do "classVsFactory.js"
//para uma função construtora
function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa = new Pessoa("João")
pessoa.falar()