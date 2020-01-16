
const imprimir = function (nota) {


    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('quadro de honra')
            break
        case 7:
        case 8:
            console.log('aprovado')
            break
        default:
            console.log('reprovado')
    }
}
imprimir(9)
imprimir(5)
imprimir(7)