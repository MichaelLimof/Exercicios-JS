//Recurso introduzido no ES2015
//é uma forma de retirar de uma estrutura, neste caso um objeto, atributos

const [a] = [10]

console.log(a)

const [n1, n2, n4, n5] = [2, 3, 4, 5]

console.log(n1, n2, n4, n5)


const [, [, note1]] = [[2, 3, 4], [7, 8, 10]]

console.log(note1)