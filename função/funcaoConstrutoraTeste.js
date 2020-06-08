function Pessoa() {
    let nome
    let idade
    let cpf

    this.setnome = function(string) {
        nome = string;
    }

    this.getNome = function() {
        return nome
    }

    console.log("oi")
    
}


const p = new Pessoa()

p.setnome("gabriel")

console.log(p.getNome())