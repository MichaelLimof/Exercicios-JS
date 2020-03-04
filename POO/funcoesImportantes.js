const pessoa ={
    nome:'ana',
    idade:20,
    peso:55
}

console.log(Object.keys(pessoa))   //retorna as chaves ->[ 'nome', 'idade', 'peso' ]

console.log(Object.values(pessoa))  //retorna somente o conteudo -> [ 'ana', 20, 55 ]

console.log(Object.entries(pessoa))   //retorna um Array -> [ [ 'nome', 'ana' ], [ 'idade', 20 ], [ 'peso', 55 ] ]



//         [ [ 'nome', 'ana' ], [ 'idade', 20 ], [ 'peso', 55 ] ]
//elementos      0       1           0      1         0     1
Object.entries(pessoa).forEach(elemento => {
    console.log(`${elemento[0]}:${elemento[1]}`)
});

console.log(`===============================`)
//usando destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}:${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable:true,      //aparece ou nao a key do objeto
    writable: false,      //permite ou nao ser sobreescrita
    value: '01/02/2000'   //seta o valor
})

pessoa.dataNascimento = '05/05/1999'
console.log(Object.keys(pessoa)) 
console.log(Object.entries(pessoa))


//Object.assign (ES6) concatena objetos 

const dest = { a:1}

const obj1 = { b:2}

const obj2 = { c:3, a: 8}


const obj = Object.assign(dest,obj1, obj2)

console.log(obj)