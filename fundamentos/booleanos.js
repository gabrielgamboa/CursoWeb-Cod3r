let isAtivo = false

console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //negação da negação , retornando o original

console.log(`\nOs verdadeiros...`)
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log(`\nAgora os falsos...`)
console.log(!!0) // 0 é "falso"
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log(('' || null || 0 || 'epa')) //retorna o primeiro valor 
//verdadeiro da expressão.

let nome = ''
console.log(nome || 'Desconhecido')
/*Se a variável nome estiver vazia, o console mostra
"Desconhecido". Teste colocando um nome para a variável !*/
