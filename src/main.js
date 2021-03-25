import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data); 

let namePersonajes= data.pokemon;

for (let i =0; i<namePersonajes.length; i++){
    console.log(namePersonajes[i].name);
}
