const numeros = [1, 4, 6, 8, 22, 56, 87, 89, 98]

for (let x in numeros) {

    if (x == 5) {
        break //o break nao age sobre as condicao IF e sim sobre o laço mais proximo do tipo for ou while
    }
    console.log(`${x} = ${numeros[x]}`)
}
console.log("================================")

for (let y in numeros) {

    if (y == 5) {
        console.log("STOP no 5")
        continue
    }
    console.log(`${y} = ${numeros[y]}`)

}



//rotulo

Externo:
for (let a in numeros) {
    for (let b in numeros) {
        if (a == 2 && b == 3) break Externo //esse Externo ao loado rotula o brak ao laço de fora
        console.log(`PAr = a=${a}, b=${b}`)
    }
}