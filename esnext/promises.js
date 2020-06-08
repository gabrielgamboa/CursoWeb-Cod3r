function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            resolve(frase) //resolve aceita apenas um unico parametro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal !!')
    .then(frase => frase.concat('?!?'))//tratar resolves
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))//tratar rejects