const nome = 'Gabriel'
const normal = 'Olá ' + nome + '!'
const template = `Olá ${nome}!` //aceita quebras de linha numa boa

console.log(normal,template)

const up = texto => texto.toUpperCase()  // função Arrow. Texto é o parâmetro, armazenada em up
console.log(`ei...${up('cuidado')}`)

const down = () => console.log("mensagem") //arrow function sem parâmetros


down()