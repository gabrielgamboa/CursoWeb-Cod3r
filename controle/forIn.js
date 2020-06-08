const notas = [6.7 , 7.4, 9.8, 8.1, 7.7]

for (i in notas) {
    console.log(`nota ${i} = ${notas[i]}`)
}


const obj = {
    nome: "Gabriel",
    idade: 18,
    profissao:"Comedor de curioso"
}

for (let i in obj) {
    console.log(`${i} = ${obj[i]}`)
}