const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//dentro da pasta atual, sirva os arquivos estáticos
app.use(express.static('.'))

//pegar os dados de um form
app.use(bodyParser.urlencoded({ extended: true }))

//dar um parse no json para objeto
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destino: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req,res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluido com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 4
    })
})

app.listen(3000, () => console.log('Executando servidor...'))