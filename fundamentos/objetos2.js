const a = {nome : "teste"}

const b = a //passagem por referência. Os 2 apontam para o mesmo objeto na memória

//se alterarmos o atributo usando b, com a também irá ser alterado. Vejamos:

b.nome = "Trocou"

console.log(a)

a.nome = "fodase"

console.log(b)
