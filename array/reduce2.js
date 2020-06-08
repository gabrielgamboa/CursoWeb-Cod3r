const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true},
]

//DESAFIO 1: todos os alunos são bolsistas ?

console.log(alunos.map(aluno => aluno.bolsista).reduce(function(resultado, bolsista) {
    //console.log(resultado, bolsista)
    return resultado && bolsista 
}) ? 'Todos os alunos são bolsistas':'Existem alunos não bolsistas')



//DESAFIO 2: algum aluno é bolsista ?

const algumBolsista = (resultado, bolsista) => resultado || bolsista 
console.log(alunos.map(aluno => aluno.bolsista).reduce(algumBolsista)? 'Pelo menos um é bolsista':'Nenhum é bolsista')
