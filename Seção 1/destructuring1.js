//Recurso introduzido no ES2015
//é uma forma de retirar de uma estrutura, neste caso um objeto, atributos

const pessoa = {
    nome: "ana",
    idade: 18,
    endereco: {
        rua: "rua do meio",
        numero: 122,
        cep: "1233 - 233"
    }
}


//está retirando os atributos nome e idade de dentro do objeto 
const { nome, idade } = pessoa

console.log(nome, idade)


const { nome: n, idade: i } = pessoa

console.log(n, i)


const { endereco: { rua, numero, cep } } = pessoa

console.log(rua, numero, cep)