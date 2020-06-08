function tratarElançarErro(erro) {
    /*throw new Error("...")
    throw 10
    throw true
    throw 'mensagem' */
    throw {
        nome:erro.name,
        msg: erro.message,
        date: new Date
    }
}


function imprimirNome(obj) {
   try{
       console.log(obj.name.toUpperCase() + "!!!")

    }
     catch(e) {
        tratarElançarErro(e)
    }
      finally {
          console.log('final...')
      }
}

const obj = {
    nome:'Roberto'
}

imprimirNome(obj)