const pilotos = ['Roberto', 'Carlos', 'Gabriel', 'Vinicius']
pilotos.pop() //remove o último elemento
console.log(pilotos)

pilotos.push('José') //coloca na última posição do array
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Cláudio') //adiciona na primeira posição do array
console.log(pilotos)


//adicionar com splice
pilotos.splice(1,0,'BANANA')
console.log(pilotos)

//remover com o splice
pilotos.splice(1,1)
console.log(pilotos) //removeu a BANANA


const algunsPilotos = pilotos.slice(2) //retorna um NOVO ARRAY a partir do indice 2
console.log(algunsPilotos)


const algunsPilotos2 = pilotos.slice(1,3) //retorna um NOVO ARRAY a partir do indice 1 ao 3, sem contar o 3
console.log(algunsPilotos2)
