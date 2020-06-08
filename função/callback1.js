const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome,indice) {
    console.log(`${indice+1} = ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})

fabricantes.forEach(function() {
    console.log(fabricantes)
})




let funct = (x,y) => {
    if (x>0) {
        y = funct(--x,y)
        y += y
    }
    return y
    
}

console.log(funct(2,5))