const express = require('express')
const app = express() //instancia o express em app

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

// no metodo GET, as informações ficam em req.query e não req.body
// req.body só é acessado pelo método POST
app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h1>Parabéns, Usuário incluído</h1>')
})

// passando parametro como id, é necessário colocar o ":"
app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id) //acessa o parametro id
    console.log(req.body)
    res.send('<h1>Parabéns, Usuário alterado</h1>')
})



app.listen(3003, () => console.log('Iniciando servidor...'))