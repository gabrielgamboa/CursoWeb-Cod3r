function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    },1000)
}
//independente da função arrow ter sido chamada por um tempo-
//rizador, ela entende que o this, dentro do contexto léxico da
//função pessoa, aponta pra pessoa.
new Pessoa