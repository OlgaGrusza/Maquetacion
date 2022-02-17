let nombre = document.getElementById("name")
let origen = document.getElementById("origen")
let destino = document.getElementById("destino")
let numeroPersonas = document.getElementById("numeroDePersonas")
let fecha = document.getElementById("fecha")
let array= []

function recojaInfo() {
    let nombrePersona = nombre.value 
    let origenPersona = origen.value
    let destinoPersona = destino.value
    let numeroPersonasPersona = numeroPersonas.value
    let fechaPersona = fecha.value
    let persona ={ nombre: nombrePersona,
                   origen: origenPersona,
                   destino: destinoPersona,
                   numeroPersonas: numeroPersonasPersona,
                   fecha: fechaPersona}
    array.push(persona)
    console.log(array)

}

function printAll() {
    let destinoPersona = destino.value
    let arrayDestino=[]
     
      for (let i = 0; i < array.length; i++)
       {
          
         if (destinoPersona[i] == "Canarias" || destinoPersona[i] == "canarias") 
         {
           return (destinoPersona)
         }
    
        else if (destinoPersona[i] == "Mallorca" || destinoPersona[i] == "mallorca")  
        {
          return (destinoPersona)  
        }  

        else if (destinoPersona[i] == "Galicia"  || destinoPersona[i] == "galicia")  
        {
          return (destinoPersona)  
        }  

      arrayDestino.push(array[i])

        
    }}

   