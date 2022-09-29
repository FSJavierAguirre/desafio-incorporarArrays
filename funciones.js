// Pokémon de Kanto

let pokeBoton = document.querySelector('#pokeBoton')
pokeBoton.addEventListener('click',boton)

function Pokemon(nombre, tipo, debilidad, vida, fase, ataque1, ataque1Valor, imageUrl){
    this.nombre=nombre,
    this.tipo=tipo,
    this.debilidad=debilidad,
    this.vida=vida,
    this.fase=fase,
    this.ataque1=ataque1
    this.ataque1Valor=ataque1Valor
    this.imageUrl = imageUrl
}

let pokemon010 = new Pokemon("Caterpie","Bicho","Volador",85,"Básico","Placaje",20,)
let pokemon016 = new Pokemon("Pidgey","Volador","Agua",100,"Básico","Ataque alado",35)
let pokemon025 = new Pokemon("Pikachu","Eléctrico","Lucha",100,"Básico","Impactrueno",35)
let pokemon042 = new Pokemon("Zubat","Veneno","Tierra",100,"Básico","Picotazo venenoso",40)
let pokemon056 = new Pokemon("Mankey","Lucha","Psíquico",100,"Básico","Golpe certero",40)
let pokemon063 = new Pokemon("Abra","Psíquico","Siniestro",100,"Básico","Confusión",30)
let pokemon124 = new Pokemon("Jynx","Hielo","Acero",100,"Básico","Ventisca",30)
let pokemon132 = new Pokemon("Ditto","Normal","Lucha",85,"Básico","Placaje",20)
let pokemon133 = new Pokemon("Eevee","Normal","Lucha",100,"Básico","Placaje",20)
let pokemon147 = new Pokemon("Dratini","Dragón","Hada",100,"Básico","Garra dragón",45)
let pokemon152 = new Pokemon("Chikorita","Planta","Fuego",100,"Básico","Hojas navaja",35,"https://i.imgur.com/pm3UBbA.gif")
let pokemon155 = new Pokemon("Cyndaquil","Fuego","Agua",100,"Básico","Ascuas",35,"https://i.imgur.com/ISBKDS9.gif")
let pokemon158 = new Pokemon("Totodile","Agua","Eléctrico",100,"Básico","Chorro de agua",35,"https://i.imgur.com/KTeT2X6.gif")
let equipoPokemon = []

async function desplegarAlertaPokemonInicial(pokemon){
    await Swal.fire({
        text: `¡Felicidades! Ahora te acompaña ${pokemon.nombre} y tiene ${pokemon.vida} puntos de salud`,
        imageUrl: pokemon.imageUrl,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonText:'Continuar',
    })
}

async function boton(){

    const primerAlert = await Swal.fire({
        title: '¡Hola!',
        text: 'Yo soy el Profesor Oak y me encargo de estudiar el fenómeno de los Pokémon. Este mundo es extenso y todos somos parte de él. Para comenzar tu aventura, dime tu nombre:',
        input: 'text',
        imageUrl: 'https://i.imgur.com/Ts9Uq4O.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonText:'Ese es mi nombre',
        inputValidator: (value) => {
            if (!value) {
              return 'Vamos, no seas tímido. Dime como te llamas.'
            }
          }
    })
    const nombreEntrenador = primerAlert.value

    await Swal.fire({
        imageUrl: 'https://i.imgur.com/Ts9Uq4O.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        text: `Ya veo... un gusto conocerte ${nombreEntrenador}`,
        confirmButtonText:'Continuar',
    })

    const segundoAlert = await Swal.fire({
        title: 'Profesor Oak:',
        text: 'Para dar inicio a tu aventura, elige a tu compañero pokémon de la región:',
        imageUrl: 'https://i.imgur.com/5EiSLq4.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonText:'¡Yo te elijo!',
        input: 'radio',
        inputOptions: {Cyndaquil: pokemon155.nombre, Totodile: pokemon158.nombre, Chikorita: pokemon152.nombre},
        inputValidator: (value) => {
          if (!value) {
            return '¡Necesitas elegir uno!'
          }
        }
    })
    const eleccionInicial = segundoAlert.value
    console.log(segundoAlert)

    if(eleccionInicial === 'Cyndaquil'){
        await desplegarAlertaPokemonInicial(pokemon155)
    } else if(eleccionInicial==='Totodile'){
        await desplegarAlertaPokemonInicial(pokemon158)
    } else{
        await desplegarAlertaPokemonInicial(pokemon152)
    }

    await Swal.fire({
        text: `¡Wow! Ahora que tienes a  ${eleccionInicial} como compañero Pokémon espero que sean grandes amigos y enfrenten muchos combates juntos. ¡Buena suerte ${nombreEntrenador}!`,
        imageUrl: 'https://i.imgur.com/Ts9Uq4O.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonText:'Finalizar'
    })
}

// --- Esto para después: --- //

    // function eleccionEquipo(){
    //     eleccionUno = prompt(`Ahora que tienes un compañero, es hora de elegir tu siguiente Pokémon. Entre un caterpie y un pidgey ¿Cuál prefieres?`)
    //     eleccionUno === 'caterpie' ? equipoPokemon.push(pokemon010) : equipoPokemon.push(pokemon016)
    //     eleccionDos = prompt('Entre un pikachu y un zubat ¿Cuál prefieres?')
    //     eleccionDos === 'pikachu' ? equipoPokemon.push(pokemon025) : equipoPokemon.push(pokemon042)
    //     eleccionTres = prompt('Entre un mankey y un abra ¿Cuál prefieres?')
    //     eleccionTres === 'mankey' ? equipoPokemon.push(pokemon056) : equipoPokemon.push(pokemon063)
    //     eleccionCuatro = prompt('Ya casi terminamos... entre un jynx y un ditto ¿Qué pokémon preferirías tener en tu equipo?')
    //     eleccionCuatro === 'jynx' ? equipoPokemon.push(pokemon124) : equipoPokemon.push(pokemon132)
    //     eleccionCinco = prompt('Con esta terminamos. Entre un eevee y un dratini, ¿Cuál eliges?')
    //     eleccionCinco === 'eevee' ? equipoPokemon.push(pokemon133) : equipoPokemon.push(pokemon147)
    // }

    // let eligePokemon = parseInt(prompt(`Para dar inicio a tu aventura, elige a tu compañero pokémon de la región: \n1. ${pokemon155.nombre} \n2. ${pokemon158.nombre} \n3. ${pokemon152.nombre}`))

    // while((eligePokemon !== 1) && (eligePokemon !== 2) && (eligePokemon !== 3)){
    //     alert('No ingresaste una opción correcta')
    //     eligePokemon = parseInt(prompt(`Para dar inicio a tu aventura, elige a tu compañero pokémon de la región: \n1. ${pokemon155.nombre} \n2. ${pokemon158.nombre} \n3. ${pokemon152.nombre}`))
    // } 

    // if(eligePokemon === 1){
    //     eligePokemon = 'Cyndaquil'
    //     equipoPokemon.unshift(pokemon155)
    //     alert(`¡Felicidades! Ahora te acompaña ${pokemon155.nombre} y tiene ${pokemon155.vida} puntos de salud`)
    //     eleccionEquipo()
    // } 

    // else if(eligePokemon === 2){
    //     eligePokemon = 'Totodile'
    //     equipoPokemon.unshift(pokemon158)
    //     alert(`¡Felicidades! Ahora te acompaña ${pokemon158.nombre} y tiene ${pokemon158.vida} puntos de salud`)
    //     eleccionUno = prompt(`Ahora que tienes un compañero, es hora de elegir tu siguiente Pokémon. Entre un caterpie y un pidgey ¿Cuál prefieres?`)
    //     eleccionEquipo()
    // } 

    // else if(eligePokemon === 3){
    //     eligePokemon = 'Chikorita'
    //     equipoPokemon.unshift(pokemon152)
    //     alert(`¡Felicidades! Ahora te acompaña ${pokemon152.nombre} y tiene ${pokemon152.vida} puntos de salud`)
    //     eleccionEquipo()
    // }
    // console.log(equipoPokemon)

    // alert(`¡Wow! Ahora tienes un equipo de seis Pokémon conformado por ${eligePokemon}, ${eleccionUno}, ${eleccionDos}, ${eleccionTres}, ${eleccionCuatro} y ${eleccionCinco}. Espero que sean grandes amigos y enfrenten muchos combates juntos. ¡Buena suerte `+nombreEntrenador+`!`)