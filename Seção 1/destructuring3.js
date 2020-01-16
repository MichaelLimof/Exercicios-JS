//Recurso introduzido no ES2015
//é uma forma de retirar de uma estrutura, neste caso um objeto, atributos
function rand({ min = 0, max = 1000 }) {


    const valor = Math.random() * (max - min) + min

    return Math.floor(valor)

}

//console.log(rand({max:50, min:40}))
const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 599 }))

console.log(rand({}))
