const text = 'codando'

console.log(text.charAt(3))
console.log(text.indexOf(1))
console.log(text.substring(3))
console.log(text.substring(0, 3))

console.log('teste ' + (text) + ('!'))
console.log(text.replace(/\s/g, 's'))//altera o caracterea da posição 2 no index da posicao 1

console.log('vai, tirar, agua'.split(','))//transforma num array separado por virgula



const up = texto => texto.toUpperCase()
console.log(`vai... ${up('toma na function')}!`)