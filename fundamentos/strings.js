const escola = "Cod3r"

console.log(escola.charAt(4)) //gera a letra q está na posição 4
console.log(escola.charAt(5)) //retorna um valor vazio pq n existe em escola
console.log(escola.charCodeAt(3)) // tabela ASCII
console.log(escola.indexOf('3')) //procura o índice do parâmetro digitado. Retorna -1 se não achar

console.log(escola.substring(1)) //começa a string a partir da posição do parâmetro
console.log(escola.substring(0,3)) //não inclui o indice 3

console.log('Escola ' .concat(escola) .concat("!")) //concatena strings
console.log(escola.replace('3','e')) //coloca o segundo parâmetro no lugar do primeiro
console.log('Ana, Maria, Pedro'.split(',')) //monta um array utilizando o parâmetro como a quebra da string

