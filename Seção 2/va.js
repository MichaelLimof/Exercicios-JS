function func([min = 0, max = 100]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(func([14, 3]))


function run(fun) {
    fun
    if (typeof fun === "function") {
        console.log('teste', typeof fun)
    }
}
run(function () { return console.log('executando a funcao') })
