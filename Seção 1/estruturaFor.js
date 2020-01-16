let numeros = [1, 3, 5, 7, 9, 11]

for (let i in numeros) {
    console.log(i, numeros[i])
}

console.log("============================")
for (i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}


const pessoa = {
    nome: 'ana',
    idade: 24,
    signo: "cancer"
}

for (let atributo in pessoa) {
    console.log(`${atributo} =  ${pessoa[atributo]}`)
}

