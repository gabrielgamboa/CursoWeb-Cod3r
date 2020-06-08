// função em JS é First-class Object(citizens)
//Migher-order function

//literal:
function fun1() {}

//armazenar numa variável:
const fun2 = function() {}

//armazenar em um array:
const array = [function(a,b) {return a+b}, fun1,fun2]
console.log(array[0](2,5))

//armazenar em um atributo de objeto:
const obj = {}
obj.falar = function() {return "Opa"}
console.log(obj.falar())

//passar funcção como parâmetro
function run(fun) {
    fun()
}

run(function () { console.log("executando...")})


// Uma função pode retornar/conter uma função :O
function soma(a,b) {
    return function(c) {
        console.log(a+b+c)
    }
}

soma(2,3)(3)
