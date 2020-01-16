//Função em Js é first Class Object (Citizen)
//High Order Function

//forma literal
function funcao() {

    return "testes"
}


//Armazenar uma funcao em Variavel
const varFuncao = function () { }

//armazenar num array
const array = [1, 3, "a", function (a, b) { return a += b }, varFuncao]
console.log(array[3](3, 3)) //resultado 6



//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return "falando!!!" }
console.log(obj.falar())


//Passar a funcao como parametro
function run(fun) {
    fun
    if (typeof fun === "function") {
        console.log('teste', typeof fun)
    }
}
run(function () { return console.log('executando a funcao') })



//uma função pode retornar/conter uma outra função
function soma(num1, num2) {
    return function (num3) {
        console.log(num1 + num2 + num3)
    }
}
soma(4, 5)(3)
const primeira = soma(4, 5)
primeira(3)