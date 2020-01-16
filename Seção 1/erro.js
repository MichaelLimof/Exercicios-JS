function tratarErroELancar(erro) {
    // throw new Error("Ocorreu um erro aqui")
    //throw 10
    //throw true
    //throw "mensagem"
    throw {

        nome: erro.name,
        msg: erro.message + " na funcao imprimirNomeScream ",
        date: new Date
    }

}



function imprimirNomeScream(obj) {

    try {
        console.log(obj.name.toUpperCase() + "!!!")
    }
    catch (e) {

        tratarErroELancar(e)
        //   console.log("erro no catch", e)
    } finally {

        console.log("final")
    }
}

const vai = { nome: "tnc" }
imprimirNomeScream(vai)




