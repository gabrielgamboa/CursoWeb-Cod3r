//posso tentar printar a ''function declaration'' antes dela
//ser declarada, pq o interpretador do JS carrega todas as 
//funções declaradas dessa forma antes de rodar o programa
console.log(Soma(5,-3))

//function declaration
function Soma(x,y) {
    return x+y
}

//function expression
const sub = function(x,y) {
    return x-y
}

//named function expression
const multi = function multi(x,y) {
    return x*y
}