const valores = [4,3,3.4,5]

valores[5] = 10
console.log(valores) //mostra que falta o elemento de índice 4
console.log(valores[10]) //retorna indefinido

valores[4] = 11
console.log(valores)
console.log(valores.length)

valores.push({id: 3},false, null,'teste') //método push coloca o parâmetro na última posição do vetor
console.log(valores)

console.log(valores.pop()) //retira e retorna o último valor do array
delete valores[0] //tira o primeiro elemento

console.log(valores) //4 e teste foram tirados
console.log(typeof valores)
