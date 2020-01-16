console.log(Math.ceil(5.3))  //ceil = arerdondamento


const objeto = {}
objeto.nome = "nome tal"
//objeto["nome"] = "novo nome"

console.log(objeto.nome)

function Obj(nome) {
    //usando o THIS o atributo nome é exposto 
    this.nome = nome
    this.exec = function () {
        console.log("executando...") //usando o THIS, tanto o atrubto quanto funcao nome é exposto 
    }
}


const obj2 = new Obj("ta aqui")
const obj3 = new Obj("novo novamente")

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()