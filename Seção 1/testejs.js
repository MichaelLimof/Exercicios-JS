let a = 3

global.b = 2


console.log(this.a)
console.log(global.b)
this.c = 444

console.log(this.c)
console.log(module.exports.c)  //mesma coisa que o this

console.log(module.exports === this)



//variavel em objeto global
//nao é recomendavel
abc = 5
console.log(global.abc)