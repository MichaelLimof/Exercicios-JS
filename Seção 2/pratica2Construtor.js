

function Receita(ingrediente, timer){

    let tempo = 0;

    this.prato = function(){
        if (ingrediente == null || undefined  ){
            console.log('nao ha ingredientes')
        }else {
             if (ingrediente === 'sal'){
                     console.log('prato salgado')
                     tempo += timer
             }else if (ingrediente === 'acucar' || 'açucar'){
                        console.log('prato doce')
                        tempo += timer
                       }else
               
                    console.log('prato nao definido')
                     
                  
            }
        }

        this.getAvental = function(){
            return tempo
        }
    }

    let lasanha = new Receita('sal', 10)
    lasanha.prato()
     console.log(lasanha.getAvental())


     let bolo = new Receita('açucar',20)
     bolo.prato()
    console.log(bolo.getAvental())

    let fome = new Receita
     fome.prato()
    console.log(fome.getAvental())




    
