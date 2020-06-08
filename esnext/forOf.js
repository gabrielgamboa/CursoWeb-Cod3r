for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

//usando o FOR IN, pegamos apenas o índice dos elementos
// para pegar o valor, seria necessário colocar assuntosEcma[i]
for (let i in assuntosEcma) {
    console.log(i)
}


//para pegar diretamente o valor, utilize o FOR OF
for (let i of assuntosEcma) {
    console.log(i)
}



const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
]) 


//pegar tudo
for (let assunto of assuntosMap) {
    console.log(assunto)
}


//pegar apenas as chaves
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}



//pegar apenas os valores
for (let valor of assuntosMap.values()) {
    console.log(valor)
}


//usando destructuring para pegar a chave e o valor
for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor)
}


