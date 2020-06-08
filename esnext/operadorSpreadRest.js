// operador ...rest(juntar) /spread(espalhar)
// usar rest com parametro de função

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12000.00}
const clone = { ativo: true, ...funcionario} //espalha os atributos no clone
console.log(clone)


//usar spread com array
const grupoA = ['João', 'Maria', 'Glória']
const grupoFinal = ['Pedro', ...grupoA, 'Rafaela']
console.log(grupoFinal)