import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let personajes = data.pokemon;

  crearTarjetas(personajes);

function crearTarjetas(){ 
  for(let i = 0; i < personajes.length; i++){
      /*let nombrePersonajes = personajes[i].name;
      let numeroPersonaje = personajes[i].num;
      let imagenPersonajes = personajes[i].img;
      let acercaPersonajes = personajes[i].about;*/

      let contenedorpersonajes = document.getElementById("contenedor");

      let nuevoElemento = document.createElement('div');
      let nuevaImagen = document.createElement('img');
      let nuevoNombre = document.createElement('button');
      let nuevoNum = document.createElement('p');
      
      

      nuevoElemento.className = 'tarjeta';
      nuevoNombre.id = personajes[i].num;
      nuevoNombre.className = 'nombrePokemon';
      
      
      nuevaImagen.src = personajes[i].img;
      nuevoNombre.innerHTML = personajes[i].name;
      nuevoNum.innerHTML = personajes[i].num;
      

      nuevoElemento.appendChild(nuevoNum);
      nuevoElemento.appendChild(nuevaImagen);
      nuevoElemento.appendChild(nuevoNombre);
      contenedorpersonajes.appendChild(nuevoElemento);

      let botonPokemon = document.getElementsByClassName('nombrePokemon');
      botonPokemon[i].addEventListener('click', mostrarModal);
    }
}


//Ventana modal
function mostrarModal(event){
  const perfilPokemon = event.currentTarget.id;
  const encontrandoPokemon = personajes.find(elemento => elemento.num == perfilPokemon);
  const cajitaPokemon = document.createElement('div');
  const imgPokemon = document.createElement('img');
  const acercaDelPokemon = document.createElement('p');
  const nombrePokemon = document.createElement('p');
  const pesoPokemon = document.createElement('p');
  const tipoPokemon = document.createElement('p');
  const debilidadPokemon = document.createElement('p');
  const evolucionPokemon = document.createElement('p');
 
  cajitaPokemon.id = 'modalDePokemon';
  cajitaPokemon.innerHTML = encontrandoPokemon.num;
  imgPokemon.src = encontrandoPokemon.img;
  nombrePokemon.innerHTML = encontrandoPokemon.name;
  acercaDelPokemon.innerHTML = encontrandoPokemon.about;
  pesoPokemon.innerHTML = encontrandoPokemon.size.weight;
  tipoPokemon.innerHTML = encontrandoPokemon.type
  debilidadPokemon.innerHTML = encontrandoPokemon.weaknesses;

  cajitaPokemon.appendChild(imgPokemon);
  cajitaPokemon.appendChild(nombrePokemon);
  cajitaPokemon.appendChild(acercaDelPokemon);
  cajitaPokemon.appendChild(pesoPokemon);
  cajitaPokemon.appendChild(tipoPokemon);
  cajitaPokemon.appendChild(debilidadPokemon);
  
  
  console.log(encontrandoPokemon);
  let modal = document.getElementById('miModal');
  modal.style.display='block';
  
  modal.appendChild(cajitaPokemon);
}

//cerrar ventana modal
document.getElementById('cerrar').addEventListener('click', cerrarModal);
function cerrarModal(){
  const modal = document.getElementById("miModal");
  const cajitaPokemon = document.getElementById("modalDePokemon");
  modal.removeChild(cajitaPokemon);
  modal.style.display ='none';
}

/*const tarjetaPrincipal = personajes.map(({num, name,}) => `${num} ${name}`);
console.log(tarjetaPrincipal);
const tarjetaPrincipal = personajes.map(({name, num}) => `${num} ${name}`);
console.log(tarjetaPrincipal);
*/

