const a = 1 
const b = 2
const c = 3

const obj1 = {a:a,b:b,c:c}
const obj2 = {a, b, c}
console.log(obj1, obj2)


const nomeAttr = 'nota'
const valorAtrr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAtrr
console.log(obj3)



const obj4 = {[nomeAttr]: valorAtrr}



const obj5 = {
    funcao1: function() {
        //...
    },
    funcao2() {
        //...
    }
}

console.log(obj5)