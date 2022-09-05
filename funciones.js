// Pokémon de Kanto

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
let pokemon025 = new Pokemon("Pikachu","Eléctrico","Lucha",100,"Básico","Impactrueno",35)
let pokemon056 = new Pokemon("Mankey","Lucha","Psíquico",100,"Básico","Golpe certero",40)
let pokemon063 = new Pokemon("Abra","Psíquico","Siniestro",100,"Básico","Confusión",30)

let equipoPokemon = []
let nombreEntrenador = prompt('¡Hola! El mundo de los pokémon es extenso y todos somos parte de él. Para comenzar tu aventura, dime tu nombre: ')