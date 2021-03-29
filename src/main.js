import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let personajes = data.pokemon;

for(let i = 0; i < personajes.length; i++){
<<<<<<< HEAD
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
    
=======

    let nombrePersonajes = personajes[i].name;
    let numeroPersonaje = personajes[i].num;
    let imagenPersonajes = personajes[i].img;

   let contenedorpersonajes = document.getElementById("pokemons");

   let nuevoElemento = document.createElement("div");
   let nuevaImagen = document.createElement("img");
   let nuevoNombre = document.createElement("h1");
   let nuevoNum = document.createElement("h2")

   nuevoElemento.className = "tarjeta";

   nuevaImagen.src=personajes[i].img;
   nuevoNombre.innerHTML=personajes[i].name;
   nuevoNum.innerHTML=personajes[i].num;

   nuevoElemento.appendChild(nuevaImagen);
   nuevoElemento.appendChild(nuevoNombre);
   nuevoElemento.appendChild(nuevoNum);
   contenedorpersonajes.appendChild(nuevoElemento);





>>>>>>> d74184400fd3beca01cf0a77e24fad7cdb1f2094
}
  



