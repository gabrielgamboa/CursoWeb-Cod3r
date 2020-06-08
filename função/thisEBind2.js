function pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this),500) //segundo argumento é em milisegundos
}

new pessoa

//posso também fazer uma constante receber o valor de this:
// const tal = this
//troca todos os this por tal e funcionará igual o bind
//pois o this sempre apontará para a função pessoa

function pessoa2() {
    this.number = 0
    const self = this

    setInterval(function() {
        self.number++
        console.log(self.number)
    }.bind(self),500) //segundo argumento é em milisegundos
}

new pessoa2