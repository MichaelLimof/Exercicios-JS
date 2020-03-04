//o contexto lexico promove que uma funcao ao ser declarada ,carregara consigo o local onde foi definido

const valor = 'Global'

function minhaFuncao(){

    console.log(valor)

}

function exec(){
    const valor ='Local'

    minhaFuncao()
}


exec()