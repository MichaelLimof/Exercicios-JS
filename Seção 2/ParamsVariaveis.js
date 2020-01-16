//A propriedade arguments serve recuperar os parametros passados a
// uma função

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1, 2, 3))
console.log(soma("vai", " ", "dormir", " ", "logo"))