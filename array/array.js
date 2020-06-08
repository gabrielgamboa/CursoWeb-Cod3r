console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia','Carlos','Ana')
aprovados = ['Bia',"Ana",'Carlos']

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //coloca em ordem
console.log(aprovados)


delete aprovados[1] //deixa vazio, e não tira do array, apenas deixa undefined
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2') //a partir do indice 1, exclua dois itens a frente
console.log(aprovados)