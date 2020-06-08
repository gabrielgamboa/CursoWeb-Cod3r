const peso1= 1.0
const peso2= Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) //se a casa decimal é 0, o js o considera também inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.87
const avaliacao2 = 8.78

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1+peso2)

console.log(media.toFixed(2)) //reduz casas decimais
console.log(media.toString(2)) // converte pra string e o converte em binário
console.log(typeof media) //media continua sendo number pq as funções não mexem na sua tipagem
console.log(typeof Number) //é uma função