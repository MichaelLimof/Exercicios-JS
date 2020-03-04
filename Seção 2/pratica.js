const numbers = [3.4,5.6,7.8,5.5,8.9]


//sem callback
const numerosAbaixo = []

for(let i in numbers){
    if(numbers[i] < 7){
        numerosAbaixo.push(numbers[i])
    }
}
console.log(numerosAbaixo)



//com callback
const numerosAbaixo2 = numbers.filter((numbers) => numbers < 7)

console.log(numerosAbaixo2)

//ou 

const notasMenorque7 = numbers => numbers < 7
const numerosAbaixo3 = numbers.filter(notasMenorque7)

console.log(numerosAbaixo3)


