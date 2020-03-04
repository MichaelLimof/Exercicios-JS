//pessoa aponta para um endereco de memoria que aponta para um dado
const pessoa ={
    nome:'joao'
}

pessoa.nome ='Pedro'
console.log(pessoa)

//torna o objeto nao-modificavel de alteracao nem inclusao de atributos
Object.freeze(pessoa)
pessoa.nome ='XXXXX'

console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'caolho'})
pessoaConstante.nome = 'Juca'
console.log(pessoaConstante)