const sequencia = {
    _valor:1, //convenção usar o _(n significa que é privado)
    get valor() {return this._valor++},
    set valor(valor) {
        if (valor > this._valor)
        this._valor = valor
    } 
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //continua no 1001
console.log(sequencia.valor, sequencia.valor)
