const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//dentro da pasta atual, sirva os arquivos estáticos
app.use(express.static('.'))

//pegar os dados de um form
app.use(bodyParser.urlencoded({ extended: true }))

//dar um parse no json para objeto
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send(new Date))

app.listen(8080, () => console.log('Executando servidor...'))