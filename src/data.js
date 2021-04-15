// estas funciones son de ejemplo


/*export const example = () => {
  return 'example';
};
export const anotherExample = () => {
  return 'OMG';
};*/

export const filtrarNombre = (name, Pokemons) => {
  return Pokemons.filter(Pokemon => Pokemon.name.includes(name));
}

export const filtrarTipo = (tipo, Pokemons) => {
return Pokemons.filter (pokemon => pokemon.type === type);
}



/*export const ordenarAlfabeticamente = (prev, next) => {
if (prev.name > next.name){
  return 1;
}
if (prev.name < next.name){
  return
}


}*/

//console.log(filterType);