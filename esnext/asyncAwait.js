// EXEMPLO COM PROMISSES

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            //evento para quando vir dados
            res.on('data', dados => {
                resultado += dados
            })
    
            //evento para quando acabar o envio de dados
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

//RECURSO ATUAL
// OBJETIVO DE SIMPLIFICAR O USO DE PROMISES...

let obterAluno = async () => {
    const turmaA = await getTurma('a')
    const turmaB = await getTurma('b')
    const turmaC = await getTurma('c')
    return [].concat(turmaA, turmaB, turmaC)
} //retorna um objeto AsyncFunction

obterAluno()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))