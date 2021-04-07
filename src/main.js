import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let personajes = data.pokemon;

crearTarjetas(personajes)

function crearTarjetas(datosPersonajes){ 
  for(let i = 0; i < personajes.length; i++){
      let nombrePersonajes = personajes[i].name;
      let numeroPersonaje = personajes[i].num;
      let imagenPersonajes = personajes[i].img;

      let contenedorpersonajes = document.getElementById("contenedor");

      let nuevoElemento = document.createElement("div");
      let nuevaImagen = document.createElement("img");
      let nuevoNombre = document.createElement("button");
      let nuevoNum = document.createElement("p")

      nuevoNombre.className = 'nombrePokemon';

      nuevoElemento.className = "tarjeta";

      nuevaImagen.src=personajes[i].img;
      nuevoNombre.innerHTML=personajes[i].name;
      nuevoNum.innerHTML=personajes[i].num;

      nuevoElemento.appendChild(nuevaImagen);
      nuevoElemento.appendChild(nuevoNombre);
      nuevoElemento.appendChild(nuevoNum);
      contenedorpersonajes.appendChild(nuevoElemento);

      let botonPokemon = document.getElementsByClassName('nombrePokemon');
      //botonPokemon[i].addEventListener('click', mostrarModal);
      //document.getElementsByTagName('button').addEventListener('click', mostrarModal);
      document.getElementById('myBtn').addEventListener('click', mostrarModal);
  }
}
//Ventana modal
//document.getElementById('myBtn').addEventListener('click', mostrarModal);
function mostrarModal(){
  document.getElementById('myModal').style.display='block';
    //for(let i = 0; i< personajes.length; i++){
      // console.log(personaje);
   // }
    console.log(personajes[0]);
}

//cerrar ventana modal
document.getElementById('close').addEventListener('click', cerrarModal);
function cerrarModal(){
  document.getElementById('myModal').style.display ='none';
  console.log('No me quiero ir señor Stark');
}

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
