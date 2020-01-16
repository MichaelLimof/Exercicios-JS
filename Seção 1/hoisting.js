//Hoisting é  o Içamento da Variavel VAR, ou seja é o comportamento de mover a declaração para o topo


console.log("a =", a)
var a = 5
console.log("a =", a)


function testeHoisting() {

    console.log("n =", n)
    var n = 3
    console.log("n =", n)
}

testeHoisting()