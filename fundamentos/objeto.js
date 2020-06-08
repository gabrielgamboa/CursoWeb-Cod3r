const prod1 = {}
prod1.nome = 'Celular Ultra Mega' //criação dinâmica de um atributo do objeto. CHAVE: valor
prod1.preco = 7999.99

prod1['Desconto legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}
prod2['Desconto legal'] = 0.50 //evitar atributos com espaço

console.log(prod2)