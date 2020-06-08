function Carro(velocidadeMaxima=200, delta=5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    //a partir do this ele se torna publico
    this.acelerar = function() {
        if (velocidadeAtual+delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    

    //metodo publico

    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}


const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrrari = new Carro(350, 20)
ferrrari.acelerar() // 20
ferrrari.acelerar() // 40
ferrrari.acelerar() // 60
console.log(ferrrari.getVelocidadeAtual())

console.log(typeof Carro) //função
console.log(typeof ferrrari) //objeto instanciado pela função

