function area (largura, altura){

const area  = largura * altura

if(area > 20){

console.log(`valor acima do permitido ${area} m2`)

    }else {
        return area 
    }
}

console.log(area(10,1.5)) 
console.log(area(10,2.1)) 