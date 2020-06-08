const moduloA = require('../../moduloA');

console.log(moduloA.ola);

const c = require('./pastaC') //ele procura automaticamente o arquivo INDEX.JS, não precisdando ser referenciada
console.log(c.ola2)

const http = require('http'); //módulo que veio previamente instalado no Node.
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)