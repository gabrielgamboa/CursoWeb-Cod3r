let getInteiroAleatorioEntre = (max,min) => {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 
//podemos começar com -1, pois ele executa antes de ver a condição

do {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi: ${opcao}`)
} while (opcao != -1)

console.log("flw")