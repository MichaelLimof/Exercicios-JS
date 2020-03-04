//o interpretador js primeiro vai carregar todas as funcoes, ou seja a function declaration poderia ser chamada antes mesmo de ser declarada

console.log(soma(3,4))

//erro se chamar antes >> console.log(sub(3,4))
//erro se chamar antes >> console.log(mult(3,4))

//function declaration
function soma(x,y){
    return x + y
}


//function expression
const sub = function(x,y){
    return x - y
}
console.log(sub(3,4))


//named function expression
const mult = function mult(x,y){
    return x * y
}
console.log(mult(3,4))