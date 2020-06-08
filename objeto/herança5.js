console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//É possível criar métodos dentro do protótipo dessas funções
//para que seja possivel usá-las em qualquer ocasião

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola C0dd3r'.reverse())


Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())


//É possivel alterar um método já existente, porém pode gerar efeitos colaterais...
String.prototype.toString = function() {
    return 'Lascou tudo'
}

console.log('Teste aeoh'.reverse())