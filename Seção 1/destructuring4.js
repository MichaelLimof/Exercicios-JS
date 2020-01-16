//Recurso introduzido no ES2015
//é uma forma de retirar de uma estrutura, neste caso um objeto, atributos

function rand([min = 0, max = 1000]) {

    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([10, 15]))

console.log(rand([33]))

console.log(rand([, 9]))


