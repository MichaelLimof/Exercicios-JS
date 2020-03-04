const notas = [7.7,6.5,3.5,5.6,8.1,9]


const notasBaixas = []


//sem Callback
for(let i in notas){

    if(notas[i] < 7 ){
    notasBaixas.push(notas[i])
    }

}
console.log(notasBaixas)

const notasBaixas1 = notas.filter( (nota) => nota < 7)

    console.log(notasBaixas1)