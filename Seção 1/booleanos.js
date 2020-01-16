let isativo = false
console.log(isativo)



isativo = true
console.log(isativo)


isativo = 1
console.log(!false)
console.log(!!isativo)

console.log('........TODOS OS INTEIROS SAO VERDADEIROS, EXCETO 00.........')
console.log(!!3)

console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isativo = true))


console.log('........OS FALSOS.........')
console.log(!!0)
console.log(!!'')//String vazio
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isativo = false))

console.log('.......PRA FINALIZAR.........')
console.log(!!('' || null || 0 || ' '))


let nome = ''
console.log(nome || 'Desconhecido')
