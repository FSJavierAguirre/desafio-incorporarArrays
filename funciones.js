// Pokémon de Kanto

alert('¡Hola! El mundo de los pokémon es extenso y todos somos parte de él.')
let nombreEntrenador = prompt('Para comenzar tu aventura, dime tu nombre: ')
while(nombreEntrenador === ''){
    alert('¡Vamos! No seas tímido/a, dime como te llamas:')
    nombreEntrenador = prompt('Para comenzar tu aventura, dime tu nombre: ')
}
alert('Ya veo... un gusto conocerte '+nombreEntrenador)

function Pokemon(nombre, tipo, debilidad, vida, fase, ataque1, ataque1Valor){
    this.nombre=nombre,
    this.tipo=tipo,
    this.debilidad=debilidad,
    this.vida=vida,
    this.fase=fase,
    this.ataque1=ataque1
    this.ataque1Valor=ataque1Valor
}

let pokemon001 = new Pokemon("Bulbasaur","Planta","Fuego",100,"Básico","Hojas navaja",35)
let pokemon004 = new Pokemon("Charmander","Fuego","Agua",100,"Básico","Ascuas",20)
let pokemon007 = new Pokemon("Squirtle","Agua","Eléctrico",100,"Básico","Chorro de agua",30)
let pokemon010 = new Pokemon("Caterpie","Bicho","Volador",85,"Básico","Placaje",20)
let pokemon016 = new Pokemon("Pidgey","Volador","Agua",100,"Básico","Ataque alado",35)
let pokemon025 = new Pokemon("Pikachu","Eléctrico","Lucha",100,"Básico","Impactrueno",35)
let pokemon042 = new Pokemon("Zubat","Veneno","Tierra",100,"Básico","Picotazo venenoso",40)
let pokemon056 = new Pokemon("Mankey","Lucha","Psíquico",100,"Básico","Golpe certero",40)
let pokemon063 = new Pokemon("Abra","Psíquico","Siniestro",100,"Básico","Confusión",30)
let pokemon124 = new Pokemon("Jynx","Hielo","Acero",100,"Básico","Ventisca",30)
let pokemon132 = new Pokemon("Ditto","Normal","Lucha",85,"Básico","Placaje",20)
let pokemon133 = new Pokemon("Eevee","Normal","Lucha",100,"Básico","Placaje",20)
let pokemon147 = new Pokemon("Dratini","Dragón","Hada",100,"Básico","Garra dragón",45)
let equipoPokemon = []

let eligePokemon = parseInt(prompt(`Para dar inicio a tu aventura, elige a tu compañero pokémon de la región: \n1. ${pokemon001.nombre} \n2. ${pokemon004.nombre} \n3. ${pokemon007.nombre}`))

while((eligePokemon !== 1) && (eligePokemon !== 2) && (eligePokemon !== 3)){
    alert('No ingresaste una opción correcta')
    eligePokemon = parseInt(prompt(`Para dar inicio a tu aventura, elige a tu compañero pokémon de la región: \n1. ${pokemon001.nombre} \n2. ${pokemon004.nombre} \n3. ${pokemon007.nombre}`))
} 

if(eligePokemon === 1){
    eligePokemon = 'Bulbasaur'
    equipoPokemon.unshift(pokemon001)
    alert(`¡Felicidades! Ahora te acompaña ${pokemon001.nombre} y tiene ${pokemon001.vida} puntos de salud`)
    eleccionUno = prompt(`Ahora que tienes un compañero, es hora de elegir tu siguiente Pokémon. Entre un caterpie y un pidgey ¿Cuál prefieres?`)
    if(eleccionUno === 'caterpie'){
        equipoPokemon.push(pokemon010)
    } else{
        equipoPokemon.push(pokemon016)
    }
    eleccionDos = prompt('Entre un pikachu y un zubat ¿Cuál prefieres?')
    if(eleccionDos === 'pikachu'){
        equipoPokemon.push(pokemon025)
    } else{
        equipoPokemon.push(pokemon042)
    }
    eleccionTres = prompt('Entre un mankey y un abra ¿Cuál prefieres?')
    if(eleccionTres === 'mankey'){
        equipoPokemon.push(pokemon056)
    } else{
        equipoPokemon.push(pokemon063)
    }
    eleccionCuatro = prompt('Ya casi terminamos... entre un jynx y un ditto ¿Qué pokémon preferirías tener en tu equipo?')
    if(eleccionCuatro === 'jynx'){
        equipoPokemon.push(pokemon124)
    } else{
        equipoPokemon.push(pokemon132)
    }
    eleccionCinco = prompt('Con esta terminamos. Entre un eevee y un dratini, ¿Cuál eliges?')
    if(eleccionCinco === 'eevee'){
        equipoPokemon.push(pokemon133)
    } else{
        equipoPokemon.push(pokemon147)
    }
} 

else if(eligePokemon === 2){
    eligePokemon = 'Charmander'
    equipoPokemon.unshift(pokemon004)
    alert(`¡Felicidades! Ahora te acompaña ${pokemon004.nombre} y tiene ${pokemon004.vida} puntos de salud`)
    eleccionUno = prompt(`Ahora que tienes un compañero, es hora de elegir tu siguiente Pokémon. Entre un caterpie y un pidgey ¿Cuál prefieres?`)
    if(eleccionUno === 'caterpie'){
        equipoPokemon.push(pokemon010)
    } else{
        equipoPokemon.push(pokemon016)
    }
    eleccionDos = prompt('Entre un pikachu y un zubat ¿Cuál prefieres?')
    if(eleccionDos === 'pikachu'){
        equipoPokemon.push(pokemon025)
    } else{
        equipoPokemon.push(pokemon042)
    }
    eleccionTres = prompt('Entre un mankey y un abra ¿Cuál prefieres?')
    if(eleccionTres === 'mankey'){
        equipoPokemon.push(pokemon056)
    } else{
        equipoPokemon.push(pokemon063)
    }
    eleccionCuatro = prompt('Ya casi terminamos... entre un jynx y un ditto ¿Qué pokémon preferirías tener en tu equipo?')
    if(eleccionCuatro === 'jynx'){
        equipoPokemon.push(pokemon124)
    } else{
        equipoPokemon.push(pokemon132)
    }
    eleccionCinco = prompt('Con esta terminamos. Entre un eevee y un dratini, ¿Cuál eliges?')
    if(eleccionCinco === 'eevee'){
        equipoPokemon.push(pokemon133)
    } else{
        equipoPokemon.push(pokemon147)
    }
} 

else if(eligePokemon === 3){
    eligePokemon = 'Squirtle'
    equipoPokemon.unshift(pokemon007)
    alert(`¡Felicidades! Ahora te acompaña ${pokemon007.nombre} y tiene ${pokemon007.vida} puntos de salud`)
    eleccionUno = prompt(`Ahora que tienes un compañero, es hora de elegir tu siguiente Pokémon. Entre un caterpie y un pidgey ¿Cuál prefieres?`)
    if(eleccionUno === 'caterpie'){
        equipoPokemon.push(pokemon010)
    } else{
        equipoPokemon.push(pokemon016)
    }
    eleccionDos = prompt('Entre un pikachu y un zubat ¿Cuál prefieres?')
    if(eleccionDos === 'pikachu'){
        equipoPokemon.push(pokemon025)
    } else{
        equipoPokemon.push(pokemon042)
    }
    eleccionTres = prompt('Entre un mankey y un abra ¿Cuál prefieres?')
    if(eleccionTres === 'mankey'){
        equipoPokemon.push(pokemon056)
    } else{
        equipoPokemon.push(pokemon063)
    }
    eleccionCuatro = prompt('Ya casi terminamos... entre un jynx y un ditto ¿Qué pokémon preferirías tener en tu equipo?')
    if(eleccionCuatro === 'jynx'){
        equipoPokemon.push(pokemon124)
    } else{
        equipoPokemon.push(pokemon132)
    }
    eleccionCinco = prompt('Con esta terminamos. Entre un eevee y un dratini, ¿Cuál eliges?')
    if(eleccionCinco === 'eevee'){
        equipoPokemon.push(pokemon133)
    } else{
        equipoPokemon.push(pokemon147)
    }
}
console.log(equipoPokemon)

alert(`¡Wow! Ahora tienes un equipo de seis Pokémon conformado por ${eligePokemon}, ${eleccionUno}, ${eleccionDos}, ${eleccionTres}, ${eleccionCuatro} y ${eleccionCinco}. Espero que sean grandes amigos y enfrenten muchos combates juntos. ¡Buena suerte `+nombreEntrenador+`!`)