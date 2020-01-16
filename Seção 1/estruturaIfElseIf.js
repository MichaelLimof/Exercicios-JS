Number.prototype.entre = function (inicio, fim) {

    return this >= inicio && this <= fim

}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('quadro de honra')
    } else if (nota.entre(7, 8)) {
        console.log('Aprovado')
    }
    else if (nota.entre(4, 6)) {
        console.log('recuperacao')
    }
    else if (nota.entre(1, 3)) {
        console.log('Reprovado')
    } else {
        console.log("nota invalida")
    }

}
imprimirResultado(8)
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado(-1)