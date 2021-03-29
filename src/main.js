import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let personajes = data.pokemon;

for(let i = 0; i < personajes.length; i++){
    //contenedores
    let contenedorTarjeta = document.getElementById("profile");
    let contenedorNumero = document.createElement("p");
    console.log("ola ke ace");
    
    /*iteración sobre la información traida
    let nombrePersonaje = personajes[i].name;
    let numeroPersonaje = personajes[i].num;
    let imagenPersonaje = personajes[i].img;*/

    

    contenedorNumero.innerHTML=personajes[1].num;
    return contenedorNumero
    
}



