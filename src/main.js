import { filtrarNombre, filtrarTipo,organizarAparicion,filtrarDebilidad} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const personajes = data.pokemon;

function crearTarjetas(personajes){ 
  let contenedorpersonajes = document.getElementById("contenedor");
  contenedorpersonajes.innerHTML = '';
  for(let i = 0; i < personajes.length; i++){
    let nuevoElemento = document.createElement('div'); //Se crean los elementos que van a contener la tarjeta del pokemon
    let nuevaImagen = document.createElement('img');
    let nuevoNombre = document.createElement('button');
    let nuevoNum = document.createElement('p');
     
    nuevoElemento.className = 'tarjeta';
    nuevoNombre.id = personajes[i].num;
    nuevoNombre.className = 'nombrePokemon';
    nuevaImagen.className = 'imagenPokemon';
    
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
crearTarjetas(personajes);

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

//barra de busqueda
const barraDeBusquedaInput = document.getElementById('filtrarBusqueda');
barraDeBusquedaInput.addEventListener('keyup', realizarBusqueda);
function realizarBusqueda(){
  let valorIngresado = barraDeBusquedaInput.value;
  console.log(valorIngresado);
  let resultadoFiltro = filtrarNombre (valorIngresado, personajes);
  crearTarjetas(resultadoFiltro);
  console.log(resultadoFiltro);
}

//Esta función nos trae los tipos de pokemon
function traerListaTipos (){
  const listaTipos =[];
  for(let i = 0; i < personajes.length; i++){
    const arrayListaTipos = personajes[i].type
    for (let j =0; j<  arrayListaTipos.length; j++ ){
      const tiposPokemon =  arrayListaTipos[j];
      if (!listaTipos.includes(tiposPokemon)){
        listaTipos.push(tiposPokemon);
      }
    } 
  }
  return listaTipos;
}

//esta función le da la funcionalidad al boton tipos
document.getElementById('tiposBanner').addEventListener('click', selectTiposPokemon);
function selectTiposPokemon(){
  document.getElementById('filtrarBusqueda').style.display="none";
  const contenedorTipos = document.getElementById('tipos');
  const selectTipos = document.createElement('select');
  selectTipos.id ='miSelect';
  const arrayTipos = traerListaTipos();
  for(let i = 0; i<arrayTipos.length; i++){
    const opcionesTiposPokemon = document.createElement('option');
    opcionesTiposPokemon.innerHTML = arrayTipos[i];
    selectTipos.appendChild(opcionesTiposPokemon);
    contenedorTipos.appendChild(selectTipos);
    opcionesTiposPokemon.value = arrayTipos[i];
  }
  let opcionSeleccionar = document.getElementById('miSelect');
  opcionSeleccionar.addEventListener('change', mostrarValorTipos);
}

// opcionSeleccionar.addEventListener("change", mostrarValorTipos);
function  mostrarValorTipos(event){
  console.log(event.target.value);
  const opcionSeleccionada = event.target.value;
  const valorTipo = filtrarTipo(opcionSeleccionada,personajes);
  console.log(valorTipo);
  crearTarjetas(valorTipo);
}

// Crea la tabla del top 10 de aparicion de Pokemon
document.getElementById('topAparicion').addEventListener('click', pegaInfo);
function genera_tabla(titulos, pokemons) {
  // Obtener la referencia del elemento body
  const cuerpo = document.getElementById("topDiez");
  //document.getElementById('contenedor').style.display="none";

  // Crea un elemento <table> y un elemento <tbody>
  const tabla   = document.createElement("table");
  const titulo = document.createElement('thead');
  const tblBody = document.createElement("tbody");

  // Crea las celdas -> titulos
  const hilera = document.createElement("tr");
  for (let i = 0; i < titulos.length; i++) {
    // Crea las hileras de la tabla
    const encabezados = document.createElement('th');
    encabezados.innerHTML = titulos[i];
    hilera.appendChild(encabezados);
  }
  titulo.appendChild(hilera);
  tabla.appendChild(titulo);
  for(let j = 0; j < pokemons.length; j++){
    const hileraCuerpo = document.createElement('tr');
    for(let k = 0; k < titulos.length; k++){
      const celda = document.createElement('td');
      celda.innerHTML = pokemons[j][titulos[k]];
      hileraCuerpo.appendChild(celda);
    }
    tblBody.appendChild(hileraCuerpo);
  }
  tabla.appendChild(tblBody);
  cuerpo.appendChild(tabla);
}

function pegaInfo(){
  const resultadoOrdenado = organizarAparicion(personajes);
  const titulosTabla = ['num', 'name', 'spawn-chance'];
  genera_tabla(titulosTabla, resultadoOrdenado);
}

document.getElementById('debilidad').addEventListener('click', botonesDebilidades);
function botonesDebilidades(){
  const contenedorBotones = document.getElementById('listaDebilidades');
  const tiposPokemon = traerListaTipos();
  
  for(let i = 0; i < tiposPokemon.length; i++){
    const boton = document.createElement('button');
    boton.innerHTML = tiposPokemon[i];
    contenedorBotones.appendChild(boton);
    boton.className = "miBoton"
    boton.value = tiposPokemon[i];
    boton.id = tiposPokemon[i];
    let botonSeleccionado = document.getElementsByClassName("miBoton");
    botonSeleccionado[i].addEventListener('click', funcionalidadBoton);
  }
}

function funcionalidadBoton(event){
  const botonSeleccionado = event.currentTarget.value;
  const datosDebilidad = filtrarDebilidad(botonSeleccionado, personajes)
  console.log(botonSeleccionado);
  console.log(datosDebilidad);
  crearTarjetas(datosDebilidad);
}

/*document.getElementById('tiposBanner').addEventListener('click', listaDeTipos);
function listaDeTipos(){
  const contenedorTipos = document.getElementById('tipos');
  const selectTipos = document.createElement('SELECT');
  selectTipos.id = 'miSelect';
  contenedorTipos.appendChild(selectTipos);// colocando el select en el div que destine en el html
  const listaTipos =[];
  for(let i = 0; i < personajes.length; i++){
    const miniListaTipos = personajes[i].type 
    for (let j =0; j< miniListaTipos.length; j++ ){
      const soloUnTipo = miniListaTipos[j];
      if (!listaTipos.includes(soloUnTipo)){
        const nuevaListaTipos = document.createElement('option')
        const seleccionadorTipos = nuevaListaTipos.appendChild(document.createTextNode(soloUnTipo));
        
        console.log(nuevaListaTipos);
        listaTipos.push(soloUnTipo);
      }document.getElementById('miSelect').appendChild(seleccionadorTipos);
    }
  }
  console.log(listaTipos);
}*/
/*const tarjetaPrincipal = personajes.map(({num, name,}) => `${num} ${name}`);
console.log(tarjetaPrincipal);
const tarjetaPrincipal = personajes.map(({name, num}) => `${num} ${name}`);
console.log(tarjetaPrincipal);
console.log(encontrandoPokemon.evolution['prev-evolution'][0]);
*/