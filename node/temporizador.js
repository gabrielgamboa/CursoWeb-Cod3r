const schedule = require('node-schedule')

// não entendi porra nenhuma da string passada no scheduleJob, preciso pesquisar depois
const tarefa1 = schedule.scheduleJob('*/2 * 10 * * 3', function() {
    console.log('Executando a tarefa 1!',new Date().getSeconds())
})

//setInterval seria a mesma coisa
setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando a tarefa 1')
}, 20000)


//regra de recorrência para substituir essa STRING estranha em cima. Muito melhor!
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] //1: segunda feira e 5: sexta feira
regra.hour = 10
regra.second = 30



const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})



