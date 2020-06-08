function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min //vir valor entre o min e max
    return Math.floor(valor) //arredonda p menos 
}

const obj = {
    max: 50,
    min: 40
}
console.log(rand(obj))
console.log(rand({min:955}))
console.log(rand({}))
//console.log(rand()) //erro pq nao tem objeto pra desestruturar

console.log(Math.floor(Math.random() * 2)) //gambiarrazada pra vir um valor booleano 0 ou 1
console.log("oi")