function soNotaBoa(nota) {

    if (typeof nota === "number") {
        if (nota >= 7) {
            console.log("APROVADO ", nota)
        } else if (nota < 7 && nota >= 0) {
            console.log("REPROVADO ", nota)
        } else
            console.log("nota invalida ", nota)


    } else {
        console.log("nao é um numero")
    }
}


soNotaBoa(8)
soNotaBoa(4)
soNotaBoa(-1)
soNotaBoa("a")

/*
function seForVerdade(valor) {
    if (valor) {
        console.log("eh verdade", valor)
        console.log("teste")
    }

}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)

seForVerdade(-1)
seForVerdade(' ')
seForVerdade([])
seForVerdade([1, 2])
seForVerdade({})*/