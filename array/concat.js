const filhas = ['Fabiana', 'Vitória']
const filhos = ['Roberto', 'Vinicius']

console.log([].concat(filhas,filhos))

//quando em matrizes, ele tira apenas o elemento de dentro dela, que no caso abaixo é um array
console.log(['a','b'].concat([2,3], [4,5], 5, [[6,7]]))