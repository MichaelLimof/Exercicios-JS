//cadeia de prototipos(propotype chain)

Object.prototype.attr0 = 'teste para o filho encontrar atraves do avo'

const avo ={           //tem como prototipo o Object.prototype
        attr1: 'Parametro do Avo'
}

const pai ={       
    __proto__: avo ,   //tem como prototipo o Avo
        attr2: 'Parametro do Pai'
}

const filho ={
    __proto__: pai ,   //tem como prototipo o Pai
        attr3: 'Parametro do Filho'
} 

console.log(filho.attr2, filho.attr1, filho.attr0)

console.log(pai.attr1)





const carro ={

    velAtual :0,
    velMax :200,

    acelerarMais(delta){

        //define a velocidade maxima estabelecida pelo velocimetro
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `esta na velocidade de ${this.velAtual}Km/h com maxima de ${this.velMax}Km/h`
    }
}

const ferrari ={

    modelo: 'F40',
    velMax: 324
}

const volvo ={

    modelo:'V40',
    status(){
        return `${this.modelo} : ${super.status()}`
    }
}


//funcao que estabelece uma relacao entre objetos (primeiro tem se um objeto e depois Prototipo)
//foi estabelecida uma relaçao de que ferrari tem carro como seu prototipo
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)


volvo.acelerarMais(150)
console.log(volvo)
console.log(volvo.status())

ferrari.acelerarMais(220)
console.log(ferrari)
console.log(ferrari.status())