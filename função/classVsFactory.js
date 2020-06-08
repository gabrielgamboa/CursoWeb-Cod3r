class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    } //se colocar isso no browser ele diz "meu nome é undefined"
    //pois o this vai variar
}

const p1 = new Pessoa('João')
p1.falar()



const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }   //não preciso usar this pq ele sabe do seu contexto léxico
}


const p2 = new Pessoa('Bernardo')
p2.falar()