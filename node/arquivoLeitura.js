const fileSystem = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono...
const conteudo = fileSystem.readFileSync(caminho, 'utf-8')
console.log(conteudo)


//assincrono...
fileSystem.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo)//conteudo vem em formato JSON
    console.log(`${config.db.host}: ${config.db.port}`)
    //só sera printado depois que for carregado
})


const config = require('./arquivo.json')//ja retorna um objeto instanciado, sem precisar converter o JSON prra objeto
console.log(config.db)

//ler os arquivos do diretórino, retorna um array de
fileSystem.readdir(__dirname, (erro, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})
