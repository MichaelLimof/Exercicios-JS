const a = 1
const b = 2
const c = 3

const obj1 ={
    a:a,
    b:b,
    c:c
}

const obj2 ={
    a,
    b,
    c
}

const nomeAttr ='nota'
const valorAttr = 7.25

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)


const testeNome ='veiculo'
const modelo = 'voyage'

const veicObj = {[testeNome] : modelo}
console.log(veicObj)

const obj5 ={
    funcao1 : function(){
        //
    },
    //No ES6
    funcao2(){

    }
}
console.log(obj5)