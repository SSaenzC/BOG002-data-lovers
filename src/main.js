import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let personajes = data.pokemon;

for(let i = 0; i < personajes.length; i++){
    let nombrePersonajes = personajes[i].name;
    let numeroPersonaje = personajes[i].num;
}

