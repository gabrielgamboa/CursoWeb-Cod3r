
const dados = [ {
    aluno: 'Gabriel',
    nota: 3.9
} , {
    aluno: 'Gisele',
    nota: 5.3
}]


function getCoisa() {
    return new Promise((resolve, reject) => {
        try {
            resolve(dados)
        } catch(e) {
            reject(e)
        }
    })
}


getCoisa()
    .then(objeto => objeto.map(alunos => alunos.aluno))
    .then(nomes => console.log(nomes))