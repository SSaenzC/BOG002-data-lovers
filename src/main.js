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
      let acercaPersonajes = personajes[i].about;

      let contenedorpersonajes = document.getElementById("contenedor");

      let nuevoElemento = document.createElement('div');
      let nuevaImagen = document.createElement('img');
      let nuevoNombre = document.createElement('button');
      let nuevoNum = document.createElement('p');
      let nuevaDescrip = document.createElement('p');
      

      nuevoElemento.className = 'tarjeta';
      nuevoNombre.className = 'nombrePokemon';
      
      
      nuevaImagen.src = personajes[i].img;
      nuevoNombre.innerHTML = personajes[i].name;
      nuevoNum.innerHTML = personajes[i].num;
      nuevaDescrip.innerHTML = personajes[i].about;

      nuevoElemento.appendChild(nuevoNum);
      nuevoElemento.appendChild(nuevaImagen);
      nuevoElemento.appendChild(nuevoNombre);
      nuevoElemento.appendChild(nuevaDescrip);
      contenedorpersonajes.appendChild(nuevoElemento);

      let botonPokemon = document.getElementsByClassName('nombrePokemon');
      botonPokemon[i].addEventListener('click', mostrarModal);

    
      let tipoPersonajes = personajes[i].type


      
  }
}

const tarjetaPrincipal = personajes.map(({name, num}) => `${num} ${name}`);
console.log(tarjetaPrincipal);

//Ventana modal
function mostrarModal(){
  document.getElementById('miModal').style.display='block';
}

//cerrar ventana modal
document.getElementById('cerrar').addEventListener('click', cerrarModal);
function cerrarModal(){
  document.getElementById('miModal').style.display ='none';s
}

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

/*const tarjetaPrincipal = personajes.map(({num, name,}) => `${num} ${name}`);
console.log(tarjetaPrincipal);*/

