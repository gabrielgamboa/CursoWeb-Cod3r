const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios'); //client HTTP 

const chineses = funcionario => funcionario.pais === 'China';
const mulheres = funcionario => funcionario.genero === 'F';
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data; //coleta os dados da resposta


    //DESAFIO: filtrar a mulher chinesa com o menor salario
    const desafio = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario);


    console.log(desafio);
})
