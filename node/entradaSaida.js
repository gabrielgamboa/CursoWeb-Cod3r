// passando uma flag pra execução pelo terminal, vemos isso com o ARGV
const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala anônimo!\n')
    process.exit()//mata o processo e finaliza a aplicação
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { //permite digitar dados
        const nome = data.toString().replace('\r\n', '') //precisa colocar replace porque o stdin tbm pega o enter

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    }) 
}