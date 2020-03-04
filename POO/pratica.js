

const incremento ={
    _valor : 1,
    get valor(){
        return this._valor++
    },
    set valor(valor){

        if(valor > this._valor){
            return this._valor = valor
        }
    }

}

console.log(incremento.valor,incremento.valor)





let  variavel={valor : 0}

Object.defineProperty(variavel,'dado', {
  
     
    get : function () {
           return   "R$" + this.valor.toFixed(2).replace(".",",") 
     
    },
    set : function (ii){

       return this.valor = ii
    },
     
})
variavel.dado = 100.00
console.log(variavel.dado)
variavel.dado = 10.00
console.log(variavel.dado)