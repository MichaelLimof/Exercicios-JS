const ferrari ={

    modelo: 'F40',
    velMax: 324
}

const volvo ={

    modelo:'V40',
    velMax: 200
}


 //o Uso o Proto vai buscar o atributo no objeto referente
 // caso nao encontre vai buscar no objeto pai (cadeia de prototipos)
console.log(ferrari.__proto__) 

console.log(ferrari.__proto__ === Object.prototype) //true
console.log(volvo.__proto__ === Object.prototype)   //true

console.log(Object.prototype.__proto__ ) //null

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto)

console.log(Object.prototype, meuObjeto.prototype)

console.log(ferrari.prototype) //undefined pois um objeto nao tem  

