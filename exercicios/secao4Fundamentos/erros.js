function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
// trye um bloco de codigo que pode retornar algum erro
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { //recebe o erro e faz algo, nesse caso passa para a funcao de throw
        tratarErroELancar(e)
    } finally { //
        console.log('final') //executa sempre, dpois do try ou do catch/throw
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)