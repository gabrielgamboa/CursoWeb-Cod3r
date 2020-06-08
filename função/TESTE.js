const valores = [1,2,3,4,5]

function imprime(valor,indice) { //o valor e indice respeitam essa ordem de parâmetro
    console.log(`${indice+1}º elemento = ${valor}`)
}

valores.forEach(imprime) //callback para cara elemento do array


const objts = [{
    nome:"gabriel",
    idade:18
}, {
    nome: "otario",
    idade:30
}]


console.table(objts)