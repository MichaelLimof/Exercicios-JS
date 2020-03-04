const pai ={
    nome:'Pedro',
    corCabelo:'preto'
}

const filho1 = Object.create(pai) //ofi criado um objeto como prototipo do pai
filho1.nome = 'juca'

console.log(filho1.corCabelo)



const filho2 = Object.create(pai, {
    nome : { value:'tonga',
    writable :false,
    enumerable:true
    }
})


console.log(filho2.nome)
filho2.nome = "tiano"
console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`)

console.log(Object.keys(filho1))
console.log(Object.keys(filho2))

//para saber se um determinado atributo pertence ao proprio objeto ou se ele 
// vem por heranca
for(let key in filho2){
    filho2.hasOwnProperty(key) ? 
    console.log(`Proprio: ${key}`) : console.log(`Por heranca: ${key}`)
}