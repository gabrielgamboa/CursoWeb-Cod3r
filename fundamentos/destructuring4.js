function rand([min = 0, max = 100]) {
    if (min > max ) {
        [min, max] = [max, min] //atribui max ao minimo e vice-versa
    }
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand([20,30]))
console.log(rand([30,20]))
console.log(rand([,30]))
console.log(rand([20, ]))
console.log(rand([]))
//console.log(rand()) erro porq não foi passado um array