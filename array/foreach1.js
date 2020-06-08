const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']


aprovados.forEach(function(nomeElemento, indiceElemento, array) {
    console.log(`${indiceElemento+1})  ${nomeElemento}`)
    console.log(array)
})


aprovados.forEach(nome => { console.log(nome) })



const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)