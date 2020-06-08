const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
const notasBaixas1 = []

for (let i in notas) {
    if (notas[i] < 7 ) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//com Callback

const notasBaixas2 = notas.filter(function(nota) {
    return nota<7 //retornando true, ele joga pro elemento do array
})

console.log(notasBaixas2)



const notasBaixas3 = notas.filter(nota => nota<7)
//filter: Returns the elements of an array that meet
//the condition specified in a callback function.
console.log(notasBaixas3)