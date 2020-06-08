//cadeia de protótipos {prototype chain}
Object.prototype.attr0 = '0'//faça isso com muito cuidado!
const avo = { attr: 'A' } //o avô referencia Object prototype
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0, filho.attr, filho.attr2, filho.attr3)


const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }

}


const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing (sombreamento de atributo)
}

const volvo = {
    modelo:'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) //ferrari tem carro como seu protótipo
Object.setPrototypeOf(volvo, carro)


console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())