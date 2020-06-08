const porta = 3003
 
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// o método USE faz com que voce passe isso em toda requisição feita
// todos serão extendidos, para que você consiga receber os dados do formulário
app.use(bodyParser.urlencoded( {extended: true} ))




app.get('/produtos', (req, res, next) => {
     res.send(bancoDeDados.getProdutos()) //converte automaticamente para JSON
})


app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) //pega o parametro da URL
})


app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, //pega os dados do corpo da requisição
        preco: req.body.preco
    })
    res.send(produto) //converte o objeto em JSON
})


app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome, //pega os dados do corpo da requisição
        preco: req.body.preco
    })
    res.send(produto) //converte o objeto em JSON
})


app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //converte o objeto em JSON
})


app.listen(porta, () => console.log(`Servidor está executando na porta ${porta}`))