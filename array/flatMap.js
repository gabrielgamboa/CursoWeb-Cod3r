const escola = [{
    turma: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    turma: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 7.5
    }, {
        nome: 'Gustavo',
        nota: 6.7
    }]
}]



const getNotaAluno = aluno => aluno.nota
const getaNotaDaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getaNotaDaTurma)
console.log(notas1)


Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getaNotaDaTurma)
console.log(notas2)