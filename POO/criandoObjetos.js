
//notacao Literal
const objeto ={
    nome:'teste',

}
console.log(objeto)




//Object em JS(é a mesma coisa da Cosntrutora)

console.log(typeof Object, typeof new Object)

const objeto2 = new Object
console.log(objeto2)





//funcao construtora(é a mesma  que Object em JS)
function Produto(nome,preco,desconto){
    this.nome = nome
    this.getPrecoComDesconto =() =>{
        return preco * (1 - desconto)
    }

}

const p1 = new Produto('pen', 5.00,0.5)
const p2 = new Produto('chair', 74.00,0.10)
p1.getPrecoComDesconto()
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto().toFixed(2))




//funcao Factory = padrao de projeto de funcao que retorna um objeto

function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario / 30) * (30 - faltas)
        }
    }
}

const func1 = criarFuncionario('joao', 1000.00, 10)
const func2 = criarFuncionario('ana', 1300.00, 8)
console.log(func1.getSalario().toFixed(2), func2.getSalario().toFixed(2))



//Object.create

const filha  = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


//Transformando Json em Objeto

const fromJSON = JSON.parse('{"info":"sou um JSON"}')
console.log(fromJSON.info)