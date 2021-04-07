import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let personajes = data.pokemon; 


for(let i = 0; i < personajes.length; i++){
    let nombrePersonajes = personajes[i].name;
    let numeroPersonaje = personajes[i].num;
    let imagenPersonajes = personajes[i].img;
    let about = personajes[i].about;
    let tipoPersonajes = personajes[i].type[0];

    let todosJuntos = [];

    todosJuntos.push(tipoPersonajes);

    let set = [...new Set (todosJuntos)];


    



    //console.log(personajes[i].type);//
    
    let contenedorpersonajes = document.getElementById("contenedor");

    let nuevoNum = document.createElement("p")
    let nuevoElemento = document.createElement("div");
    let nuevaImagen = document.createElement("img");
    let nuevoNombre = document.createElement("button");
    let nuevoAbout =  document.createElement("p");

        nuevoNombre.style.width= "30%";
        nuevoNombre.style.display="flex";
        nuevoNombre.style.alignItems="center";
        nuevaImagen.style.background="rgb(243, 246, 247)";
        nuevaImagen.style.border="outset";
        nuevoAbout.style.float="right";


    nuevoElemento.className = "tarjeta";

    nuevoNum.innerHTML=personajes[i].num;
    nuevaImagen.src=personajes[i].img;
    nuevoNombre.innerHTML=personajes[i].name;
    nuevoAbout.innerHTML=personajes[i].about;
    
    nuevoElemento.appendChild(nuevoNum);
    nuevoElemento.appendChild(nuevaImagen);
    nuevoElemento.appendChild(nuevoNombre);
    nuevoElemento.appendChild( nuevoAbout);
    
    contenedorpersonajes.appendChild(nuevoElemento);

    let contenedorTipos = document.getElementById("type");

    let nuevoType = document.createElement("div");
    let nuevoTipos = document.createElement("h1")

    nuevoType.className = "tipos";

    nuevoTipos.innerHTML = set;



    nuevoType.appendChild(nuevoTipos);

    contenedorTipos.appendChild(nuevoType);



    
}

//Ventana modal
document.getElementById("myBtn").addEventListener("click", showModal);

function showModal(){
    modal.style.display = "block";
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

/* When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}*/



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
  


